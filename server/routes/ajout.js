import express from "express"
import multer from "multer";
import bodyParser from "body-parser"
import { ajoutetudiant,ajoutenseignant, ajoutnotes, ajoutparcours, getparcours, getemploi, ajoutemploi, ajoutresultatprinc } from "../controllers/ajout.js";

const router = express.Router()
// Middleware pour gérer les téléchargements de fichiers Excel
//const storage = multer.memoryStorage();
//const upload = multer({ storage });


// Middleware pour gérer les téléchargements de fichiers Excel
//const storage = multer.memoryStorage();

const storages = multer.memoryStorage();
const upload2 = multer({ storages });


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/file")
    },
    filename: function (req, file, cb) {
     
      cb(null,  file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/ajoutetudiant', upload2.single('excelFile'), ajoutetudiant); 
router.post('/ajoutenseignant', upload2.single('excelFile'), ajoutenseignant);
router.post('/ajoutresultatprinc', upload2.single('excelFile'), ajoutresultatprinc);
router.post('/ajoutnotes', upload2.single('excelFile'), ajoutnotes);
router.post('/ajoutparcours', upload.single('pdfFile'), ajoutparcours);
router.post('/ajoutemploi', upload.single('pdfFile'), ajoutemploi);
router.get('/getparcours', getparcours);
router.get('/getemploi', getemploi);







export default router