import express from "express"
import multer from "multer";
import bodyParser from "body-parser"
import { ajoutetudiant,ajoutenseignant, ajoutresultat } from "../controllers/ajout.js";

const router = express.Router()
// Middleware pour gérer les téléchargements de fichiers Excel
const storage = multer.memoryStorage();
const upload = multer({ storage });



router.post('/ajoutetudiant', upload.single('excelFile'), ajoutetudiant); 
router.post('/ajoutenseignant', upload.single('excelFile'), ajoutenseignant);
router.post('/ajoutresultat', upload.single('excelFile'), ajoutresultat);







export default router