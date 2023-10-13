import express from "express"
import multer from "multer";
import bodyParser from "body-parser"
import { register, login, logout, listetudiant,verifyToken } from "../controllers/auth.js";
import jwt from "jsonwebtoken";



const verifyJWT = (req, res)=>{
    const token = req.headers["x-access-token"]

    if (!token){
        res.send("Yo, we need a token")
    }else{
        jwt.verify(token, "jwtSecret", (err,decoded)=>{
            if (err){
                res.json({auth: false, message:"u failed to authenticate"});
            }else{
                req.userId = decoded.id;
                next()
            }
        });
    }
}

const router = express.Router()
router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.post("/isEtudientAuth", verifyJWT ,verifyToken)






router.get("/listetudiant", listetudiant)



export default router