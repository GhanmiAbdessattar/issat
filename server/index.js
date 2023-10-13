import express  from "express";
import authRoutes from "./routes/auth.js"
import ajoutRoutes from "./routes/ajout.js"
import etudiant from "./routes/getEtudiant.js"
import cookieParsser from "cookie-parser"
import bodyParsser from "body-parser"
import multer from "multer";
import cors from "cors";




const app = express()
app.use(cors({
  origin:["http://localhost:3000"],
  methods: ["GET, POST, PUT, DELETE"],
  credentials:true
}))
// Middleware pour gérer les téléchargements de fichiers Excel
const storage = multer.memoryStorage();
const upload = multer({ storage });

 //Middleware pour permettre les requêtes CORS (à adapter en fonction de vos besoins)
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParsser())
app.use(bodyParsser.urlencoded({extended:false}))
app.use(bodyParsser.json())



app.use("/api/auth", authRoutes)

app.use("/api/ajout", ajoutRoutes)
app.use("/api/getEtudiant", etudiant)






app.listen(3001, ()=>{
    console.log("connected on 3001");
})