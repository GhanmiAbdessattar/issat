import express from "express"
import multer from "multer";
import bodyParser from "body-parser"
import { ajoutetudiant,ajoutenseignant, ajoutresultat, ajoutnotes, ajoutparcours, getparcours, getemploi, ajoutemploi } from "../controllers/ajout.js";

const router = express.Router()
// Middleware pour gérer les téléchargements de fichiers Excel
//const storage = multer.memoryStorage();
//const upload = multer({ storage });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./upload")
    },
    filename: function (req, file, cb) {
     
      cb(null,  file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/ajoutetudiant', upload.single('excelFile'), ajoutetudiant); 
router.post('/ajoutenseignant', upload.single('excelFile'), ajoutenseignant);
router.post('/ajoutresultat', upload.single('excelFile'), ajoutresultat);
router.post('/ajoutnotes', upload.single('excelFile'), ajoutnotes);
router.post('/ajoutparcours', upload.single('pdfFile'), ajoutparcours);
router.post('/ajoutemploi', upload.single('pdfFile'), ajoutemploi);
router.get('/getparcours', getparcours);
router.get('/getemploi', getemploi);







export default router