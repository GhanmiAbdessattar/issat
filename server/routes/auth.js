import express from "express"
import multer from "multer";
import bodyParser from "body-parser"
import { register, login, listetudiant,logout, Enseignant, detailnote, getNotes, searchEns, getNotesPremSemestre, getNotesDexiemSemestre, getAdmin, getResultatPrinc, getAdminCin, DeleteEnseignant, DeleteResultatPrinc, getResultatRat, getNotesRat, DeleteNoteRat, DeleteNotePrinc, getNotesPrinc, getResultatRatEtud, getResultatPrincEtud } from "../controllers/auth.js";
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
router.get("/enseignant/", Enseignant)
router.get("/detailnote/", detailnote)
router.get("/getNotes/:cin", getNotes)
router.get("/getNotesPremSemestre/:cin", getNotesPremSemestre)
router.get("/getNotesDexiemSemestre/:cin", getNotesDexiemSemestre)
router.get("/getAdmin/", getAdmin)
router.get("/getAdminCin/:cin", getAdminCin)
router.delete("/DeleteEnseignant/:ident", DeleteEnseignant)
router.delete("/DeleteResultatPrinc/:cin", DeleteResultatPrinc)
router.delete("/DeleteNoteRat/:cin", DeleteNoteRat)
router.delete("/DeleteNotePrinc/:cin", DeleteNotePrinc)

router.get("/getResultatPrinc/", getResultatPrinc)
router.get("/getResultatPrincEtud/:cin", getResultatPrincEtud)
router.get("/getResultatRatEtud/:cin", getResultatRatEtud)
router.get("/getNotesRat/", getNotesRat)
router.get("/getNotesPrinc/", getNotesPrinc)
router.get("/getResultatRat/", getResultatRat)
router.get("/searchEns/:nom", searchEns)
//router.post("/isEtudientAuth", verifyJWT ,verifyToken)






router.get("/listetudiant", listetudiant)



export default router