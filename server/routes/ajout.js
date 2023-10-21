import express from "express"
import multer from "multer";
import bodyParser from "body-parser"
import { ajoutetudiant,ajoutenseignant, ajoutresultat, ajoutnotes, ajoutparcours } from "../controllers/ajout.js";

const router = express.Router()
// Middleware pour gérer les téléchargements de fichiers Excel
const storage = multer.memoryStorage();
const upload = multer({ storage });



router.post('/ajoutetudiant', upload.single('excelFile'), ajoutetudiant); 
router.post('/ajoutenseignant', upload.single('excelFile'), ajoutenseignant);
router.post('/ajoutresultat', upload.single('excelFile'), ajoutresultat);
router.post('/ajoutnotes', upload.single('excelFile'), ajoutnotes);
router.post('/ajoutparcours', upload.single('pdfFile'), ajoutparcours);
//router.post('/ajoutemploi', upload.single('pdfFile'), ajoutparcours);





export default router