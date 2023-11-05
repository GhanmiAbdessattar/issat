import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import multer from "multer";
//import XLSX from 'xlsx';
import bodyParser from "body-parser"
import { response } from "express";
import { json } from "sequelize";
import { etudiant } from "./GetEtudiant.js";

export const register = (req, res) => {
    const cin = req.body.cin;
    const numinscription = req.body.numinscription;
    const email = req.body.email;
    const password = req.body.password;



    //find user and hash password

    if (cin.length > 0 && numinscription.length > 0 && email.length > 0 && password.length > 0) {

        const sql = 'SELECT * FROM issat2.etudiant WHERE Num_inscription=? AND mat_cin=? AND statut_etud=? ';
        db.query(sql, [numinscription, cin, "passif"], (err, result) => {

            if (result == "") {

                return res.status(200).json({ Message: "Merci de vérifier vos données", result });
            }
            if (result) {


                //hash password
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);
                //insertion d'un etudiant dans la table utilisateur
                db.query('INSERT INTO issat2.utilisateur SET cin=?, email=?, role=?, statut=?, password=?', [cin, email, "etudiant", "actif", hash], (err, result) => {

                    if (result) {
                        //update le statut de l'tudiant de passif vers actif
                        db.query('UPDATE issat2.etudiant SET statut_etud=? WHERE  mat_cin = ?', ["actif", cin], (err, result) => { })
                        const id = numinscription + cin;
                        console.log(response)
                        console.log("id pour token:", id)
                        const token = jwt.sign({ id }, "jwt-secret-key", { expiresIn: '20s' });
                        console.log("votre token", token)
                        //result.cookie('token', token);
                        //result.cookie('token', token);
                        return res.status(200).json({ Message: "User ajouter avec Success", token: token });
                    }

                    if (err) {
                        return res.status(400).json({ Message: "error in node" });
                    }
                })
            } else {
                return res.status(401).json({ Message: "verifier" });
            }

        })
    } else {
        //console.log(res)
        // return res.send({ Message: "vérifier vos données" });
        return res.status(200).json({ Message: "vous devez vérifier vos données" });

    }


};


export const login = (req, result) => {

    const email = req.body.email;
    const password = req.body.password;
    let existEtudiant;

    if (email === "" && password === "") {
        return result.status(200).json({ Message: "vérifier votre login" });
    }


    const sql = 'SELECT * FROM issat2.utilisateur WHERE email = ?';
    db.query(sql, [email], (err, res) => {
        console.log("email is:", email);
        if ((res.length <= 0)) {
            console.log(res)
            return result.json({ Message: "Etudiant doesn't exist" });
        }

        if (res) {
            console.log("password in base is:", res[0].password);
            const isPassworsCoorect = bcrypt.compareSync(password, res[0].password);
            console.log("password is:", isPassworsCoorect)
            if ((email === res[0].email) && isPassworsCoorect) {
                existEtudiant = res[0];
                console.log("existe:", existEtudiant);
                console.log("password base", res[0].password)
                console.log("votre password:", password)
                console.log((email === res[0].email))
                const id = res[0].id
                const cin = res[0].cin;
                //const nom = res[0].nom_fr;
                //const prenom = res[0].prenom_fr;
                //const num_inscription = res[0].Num_inscription;
                const role = res[0].role;
                const statut = res[0].statut;
                console.log("votre id", id)
                console.log("votre role:", role)
                console.log("votre statut:", statut)
                const token = jwt.sign({ id }, "jwt-secret-key", { expiresIn: '30s' });
                console.log("votre token:", token)

                result.cookie(String("mytoken"), token, { path: '/', expires: new Date(Date.now() + 1000 * 30), httpOnly: true, sameSite: 'lax' });
                const etudiant = [id, cin, role, statut];
                console.log("etudiant:", etudiant)
                //console.log("result: ",result.status(200).json("err"))
                result.status(200).json({ Message: "Success", token: token, etudiant });


            } else {
                console.log("password base", res[0].password)
                console.log("votre password:", password)
                console.log((email === res[0].email))
                // console.log("result: ",result.status(200).json("err"))
                result.status(200).json({ Message: "Wrong email and Password Combination" });

            }

        }

    })


}


export const listetudiant = (req, res) => {

}


export const verifyToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const id = req.params
    console.log("my id:", id);
    const token = cookies
    console.log(token);

    //const token = req.headers.authorization.trim().split(' ')[1];
    if (!token) {
        res.status(404).json({ message: "no token found" });
    }
    jwt.verify(String(token), "jwt-secret-key", (err, id) => {
        if (err) {
            console.log(id);
            const expirer = err.expiredAt
            console.log(" token est expirer à", err.expiredAt);
            return res.status(400).json({ message: "invalide token ", expirer: expirer })
        }
        console.log(req);
        return res.status(200).json({ message: "token valide ", etudiant: etudiant })
    });
    // next();
    return
};


export const logout = (req, res) => {
    res.clearCookie('mytoken')
    cookie.remove("mytoken")
    localStorage.remove("token")
    console.log(res)
    return res.json({ Status: "Success" });

}


export const Enseignant = (req, res) => {

    const sql = 'SELECT * FROM issat2.enseignant';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des données de l\'enseignant :', err);
            res.status(404).json({ Message: 'Erreur lors de la récupération des données de l\'enseignant' });
        } else {

            console.log("resultat:", results);

            //res.json({ etudiant: results });
            return res.status(200).json({ Message: " Enseignant recuperer avec Success", enseignant: results });

        }
    });

}

export const detailnote = (req, res) => {

    const sql = 'SELECT * FROM issat2.note_principale';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des données de l\'enseignant :', err);
            res.status(404).json({ Message: 'Erreur lors de la récupération des données de l\'enseignant' });
        } else {

            console.log("resultat:", results);

            //res.json({ etudiant: results });
            return res.status(200).json({ Message: " Tous les notes sont recuperer avec Success", Notes: results });

        }
    });

}

export const getNotes = async (req, res) => {
    const cin = req.params.cin;
    try {
        const sql = 'SELECT * FROM issat2.note_principale WHERE cin = ?';
        db.query(sql, [cin], (err, results) => {
            if (err) {
                console.error('Erreur lors de la récupération des notes de l\'étudiant :', err);
                return res.status(500).json({ Message: 'Erreur lors de la récupération des notes de l\'étudiant' });
            } else {
                const Notes = results;
                return res.status(200).json({ Message: "Notes de l'étudiant récupérées avec succès", Notes });
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ Message: 'Erreur interne du serveur' });
    }
};

export const searchEns = async (req, res) => {
    const nom = req.params.cin;
    try {
        const sql = 'SELECT * FROM issat2.enseignant WHERE Nom = ?';
        db.query(sql, [nom], (err, results) => {
            if (err) {
                console.error('Erreur lors de la recherche :', err);
                return res.status(500).json({ Message: 'Erreur lors de la recherche' });
            } else {
                const recherche = results;
                return res.status(200).json({ Message: "la recherche est effectuer avec succé:", recherche });
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ Message: 'Erreur interne du serveur' });
    }
};


export const getNotesPremSemestre = async (req, res) => {
    const cin = req.params.cin;
    try {
        const sql = 'SELECT * FROM issat2.note_principale WHERE cin = ? && semestre=?';
        db.query(sql, [cin, "semestre 1"], (err, results) => {
            if (err) {
                console.error('Erreur lors de la récupération des notes de l\'étudiant :', err);
                return res.status(500).json({ Message: 'Erreur lors de la récupération des notes de l\'étudiant' });
            } else {
                const Notes = results;
                return res.status(200).json({ Message: "Notes Premier Semestre de l'étudiant récupérées avec succès", Notes });
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ Message: 'Erreur interne du serveur' });
    }
};

export const getNotesDexiemSemestre = async (req, res) => {
    const cin = req.params.cin;
    try {
        const sql = 'SELECT * FROM issat2.note_principale WHERE cin = ? && semestre=?';
        db.query(sql, [cin, "semestre 2"], (err, results) => {
            if (err) {
                console.error('Erreur lors de la récupération des notes de l\'étudiant :', err);
                return res.status(500).json({ Message: 'Erreur lors de la récupération des notes de l\'étudiant' });
            } else {
                const Notes = results;
                return res.status(200).json({ Message: "Notes Dexiéme Semestre de l'étudiant récupérées avec succès", Notes });
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ Message: 'Erreur interne du serveur' });
    }
};

export const getAdmin = (req, res) => {
   
    const sql = 'SELECT * FROM issat2.utilisateur WHERE  role=?';
    db.query(sql,["admin"],(err, results) => {
        console.log(results)
        if (!results[0]) {
            console.error('Erreur lors de la récupération des données du Admin :', err);
            res.status(404).json({ Message: 'Erreur lors de la récupération des données de l\'Admin' });
        } else {
            console.log("resultat:", results);
            return res.status(200).json({ Message: " Admin recuperer avec Success", admin: results });
        }
    });
}

export const getAdminCin = (req, res) => {
    const cin = req.params.cin;
    const sql = 'SELECT * FROM issat2.utilisateur WHERE cin=? && role=?';
    db.query(sql,[cin, "admin"],(err, results) => {
        console.log(results)
        if (!results[0]) {
            console.error('Erreur lors de la récupération des données du Admin :', err);
            res.status(404).json({ Message: 'Erreur lors de la récupération des données de l\'Admin' });
        } else {
            console.log("resultat:", results);
            return res.status(200).json({ Message: " Admin recuperer avec Success", admin: results });
        }
    });
}


export const getResultatPrinc = async (req, res) => {
  
    try {
        const sql = 'SELECT * FROM issat2.resultat_principale ';
        db.query(sql, (err, results) => {
            if (err) {
                console.error('Erreur lors de la récupération des resultat des étudiants :', err);
                return res.status(500).json({ Message: 'Erreur lors de la récupération des resultat des étudiants' });
            } else {
                const resultat_principale = results;
                return res.status(200).json({ Message: "Touts les resultats du session principale sont récupérées avec succès", resultat_principale });
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ Message: 'Erreur interne du serveur' });
    }
};

export const DeleteEnseignant = (req, res)=>{
    const ident = req.params.ident;
    console.log(ident)
    db.query('DELETE FROM issat2.enseignant WHERE Ident=?', [ident],(err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json('Erreur lors de la suppression des données');
          } else {
            res.status(200).json({ Message: " Enseignant supprimer avec Success" });
          }
    
    });
} 