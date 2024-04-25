import { db } from "../connect.js";
import jwt from "jsonwebtoken"

export const getLikes = (req, res)=>{
    const q = `
    SELECT userId
    FROM likes
    WHERE postId = ?
    `

    db.query(q, [req.query.postId], (err, data)=>{
        if (err) return res.status(500).json(err)
        return res.status(200).json(data.map(like=>like.userId))//返回一个只包含用户id而不是对象的数组
    }) 
}

export const addLike = (req, res)=>{
    console.log(1)
    const userId = req.query.userId;
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("未登录!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token无效!")

        const q = "INSERT INTO likes(`userid`, `postid`) VALUES (?)"
        const values = [
            userInfo.id,
            req.body.postId
          ]
    
        db.query(q, [values], (err, data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json('点赞成功')
        }) 
    
    })
}

export const deleteLike = (req, res)=>{

    const userId = req.query.userId;
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("未登录!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token无效!")

        const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?"
    
        db.query(q, [userInfo.id, req.query.postId], (err, data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json('取消点赞成功')
        }) 
    
    })    
    
}