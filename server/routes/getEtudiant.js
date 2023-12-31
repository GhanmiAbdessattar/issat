import express from "express"
//import { etudiant } from "../controllers/getEtudiant.js";
import { getUser,getAllStudents, getAlluser, getNotesByCIN, getEtudiantPassif, getUtilisateur } from "../controllers/getEtudiant.js"



const router = express.Router()

router.get("/etudiant/:cin", getUser)
//router.get("/logout", logout)

router.get("/etudiant/", getAllStudents)
router.get("/etudiantPassif/", getEtudiantPassif)
router.get("/alluser", getAlluser);
router.get("getNotesByCIN/:cin", getNotesByCIN);
router.get("getUtilisateur/:cin", getUtilisateur);

export default router