import express from "express"
//import { etudiant } from "../controllers/getEtudiant.js";
//import { getUser, verifyToken } from "../controllers/auth.js";
//import { etudiant } from "../controllers/GetEtudiant.js";
import { getEtudiant,getNotesByCIN, getAllStudents} from "../controllers/auth.js";


const router = express.Router()

router.get("/etudiant/:cin", getEtudiant)
router.get("/etudiant/", getAllStudents)
//router.get("/logout", logout)

//router.get("/:cin", getNotesByCIN);


export default router