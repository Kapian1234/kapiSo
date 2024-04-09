import express from "express";
import userRoutes from './routes/users.js'
import commentRoutes from './routes/comments.js'
import authRoutes from './routes/auth.js'
import postRoutes from './routes/posts.js'
import likeRoutes from './routes/likes.js'
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//中间件
/* 使用 express.json() 中间件来解析JSON请求,它会处理所有传入的请求，
并尝试将请求体（body）中的JSON字符串转换为JavaScript对象.
之后，在请求处理函数中，可以通过 req.body 访问这个对象。*/
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
}))//定义哪些来源可以访问资源
app.use(cookieParser())//解析HTTP请求头中的Cookie并把它们作为对象挂载到req.cookies

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/likes', likeRoutes)
app.use('/api/auth', authRoutes)

app.listen(8800, ()=>{
    console.log("nihao")
})