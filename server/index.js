import express  from "express";
import authRoutes from "./routes/auth.js"
import cookieParsser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParsser())
app.use("/api/auth", authRoutes)



app.listen(3001, ()=>{
    console.log("connected");
})