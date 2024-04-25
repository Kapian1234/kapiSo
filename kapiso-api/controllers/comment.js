import moment from "moment";
import { db } from "../connect.js";
import jwt from "jsonwebtoken"

export const getComments = (req, res) =>{

    const q = `
    SELECT c.*, u.id AS userId, name, profilePic 
    FROM comments AS c
    JOIN users AS u ON (u.id = c.userid)
    WHERE c.postid = ?
    ORDER BY c.createdTime DESC`

    db.query(q, [req.query.postId], (err, data)=>{
        if (err) return res.status(500).json(err)
        return res.status(200).json(data)
    }) 

}

export const addComments = (req, res)=>{

    const userId = req.query.userId;
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("未登录!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token无效!")

        const q = "INSERT INTO comments(`desc`, `createdTime`, `userId`, `postId`) VALUES (?)"
        const values = [
            req.body.desc,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id,
            req.body.postId
          ]
    
        db.query(q, [values], (err, data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json('评论发布成功')
        }) 
    
    })
}