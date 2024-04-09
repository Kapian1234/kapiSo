import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const login = (req, res) => {
    //查询用户是否存在
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("用户不存在！")

        //检查密码是否正确
        const checkPassword = bcrypt.compareSync(
            req.body.password,
            data[0].password
        )
        if (!checkPassword)
            return res.status(400).json("用户名或密码错误！")
        
        //生成token
        const token = jwt.sign({ id: data[0].id }, "secretkey")//签名直接写在代码里，不推荐！
        const { password, ...others } = data[0]//从data[0]对象中移除password字段，并将剩余的属性存储在others变量中
        res.cookie(//将token存到cookie里
            "accessToken", 
            token, 
            {httpOnly: true}
        ).status(200).json(others)
    })
}


export const register = (req, res) =>{
    
    //检查用户是否存在
    const q1 = 'SELECT * FROM users WHERE username = ?'
    db.query(q1, [req.body.username], (err, data)=>{//从请求体中获得username替换第一个？  回调函数，出错时err包含错误信息，成功时data包含查询结果
        if(err) return res.status(500).json(err)//返回一个状态码为500的响应，并且错误信息会以JSON格式发送给请求方
        if(data.length) return res.status(409).json('该用户名已被占用')

        //创建用户
        const salt = bcrypt.genSaltSync(10)//生成盐，成本因子为10
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)//密码加盐后哈希化

        const q2 = 'INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)'
        const values = [
            req.body.username,
            req.body.email,
            hashedPassword,
            req.body.name
        ]
        db.query(q2, [values], (err, data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json('账号创建成功')
        })

    })

}


export const logout = (req, res) =>{
    res.clearCookie(
        'accessToken',
        {
            secure: true,//这个cookie只能通过HTTPS协议发送
            sameSite: "none"//这个cookie可以在跨站请求中发送
        }
    ).status(200).json('已退出登录')
}