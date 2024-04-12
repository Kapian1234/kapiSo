import moment from "moment";
import { db } from "../connect.js";
import jwt from "jsonwebtoken"

export const getPosts = (req, res)=>{

    //从用户浏览器的cookies中获得userId和accessToken
    const userId = req.query.userId;
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("未登录!");

    jwt.verify(token, "secretkey", (err, userInfo) => {//检查token
        if (err) return res.status(403).json("Token无效!")
        //token有效
        const q = `
        SELECT p.*, u.id AS userId, name, profilePic 
        FROM posts AS p 
        JOIN users AS u ON (u.id = p.userId)
        LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =?
        ORDER BY p.createdTime DESC`
    
        db.query(q, [userInfo.id, userInfo.id], (err, data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json(data)
        }) 
    
    })
}


export const addPost = (req, res)=>{

    const userId = req.query.userId;
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("未登录!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token无效!")

        const q = "INSERT INTO posts(`desc`, `img`, `createdTime`, `userId`) VALUES (?)"
        const values = [
            req.body.desc,
            req.body.img,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id,
          ]
    
        db.query(q, [values], (err, data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json('帖子发布成功')
        }) 
    
    })
}