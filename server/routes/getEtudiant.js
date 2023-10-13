import express from "express"
//import { etudiant } from "../controllers/getEtudiant.js";
import { getUser, verifyToken } from "../controllers/auth.js";



const router = express.Router()

router.get("/etudiant/:cin", verifyToken,getUser)
//router.get("/logout", logout)



export default router