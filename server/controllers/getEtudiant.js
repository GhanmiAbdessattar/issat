import { db } from "../db.js";

export const etudiant =  (req, res) => {


  const cin = req.params.cin;
  const  sql = 'SELECT * FROM issat2.etudiant WHERE mat_cin = ?';
  console.log("cin etud",cin)
   db.query(sql, [cin], (err, results) => {
    if (err) {
      console.log(err)
      console.log("cin:::", cin)
      console.error('Erreur lors de la récupération des données de l\'étudiant :', err);
      res.status(404).json({ Message: 'Erreur lors de la récupération des données de l\'étudiant' });
    } else {

      console.log("resultat:", results);
      const ide= results[0]
      console.log("id_etud:", ide);
      //res.json({ etudiant: results });
      return res.status(200).json({ Message: " Etudiant recuperer avec Success",   etudiant: results });

    }
  });

}

export const getUser = async (req, res) => {
  const cin = req.params.cin;
  console.log(cin);
  try {
    const sql = 'SELECT * FROM issat2.etudiant WHERE mat_cin = ?';
    db.query(sql, [cin], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des données de l\'étudiant :', err);
        return res.status(500).json({ Message: 'Erreur lors de la récupération des données de l\'étudiant' });
      } else {
        const etudiant = results[0];
        console.log("etudiant :", etudiant);
        return res.status(200).json({ Message: "Étudiant récupéré avec succès", etudiant });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ Message: 'Erreur interne du serveur' });
  }
};


export const getAllStudents = async (req, res) => {
  try {
      const sql = 'SELECT * FROM etudiant WHERE statut_etud=?';
      db.query(sql,['actif'], (err, results) => {
          if (err) {
              console.error('Erreur lors de la récupération des données des étudiants :', err);
              return res.status(500).json({ Message: 'Erreur lors de la récupération des données des étudiants' });
          } else {
              const etudiants = results;
              return res.status(200).json({ Message: "Étudiants récupérés avec succès", etudiants });
          }
      });
  } catch (err) {
      console.error(err);
      return res.status(500).json({ Message: 'Erreur interne du serveur' });
  }
};


export const getEtudiantPassif = async (req, res) => {
  try {
      const sql = 'SELECT * FROM issat2.etudiant WHERE statut_etud=?';
      db.query(sql,['passif'], (err, results) => {
          if (err) {
              console.error('Erreur lors de la récupération des données des étudiants :', err);
              return res.status(500).json({ Message: 'Erreur lors de la récupération des données des étudiants' });
          } else {
              const etudiantsPassif = results;
              console.log(results)
              return res.status(200).json({ Message: "Étudiants Passifs récupérés avec succès", etudiantsPassif });
          }
      });
  } catch (err) {
      console.error(err);
      return res.status(500).json({ Message: 'Erreur interne du serveur' });
  }
};



export const getNotesByCIN = async (req, res) => {
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



export const getAlluser = async (req, res) => {
  try {
      const sql = 'SELECT * FROM utilisateur';
      db.query(sql, (err, results) => {
          if (err) {
              console.error('Erreur lors de la récupération des données des utilisateur :', err);
              return res.status(500).json({ Message: 'Erreur lors de la récupération des données des utilisateur' });
          } else {
              const utilisateurs = results;
              return res.status(200).json({ Message: "Étudiants récupérés avec succès", utilisateurs });
          }
      });
  } catch (err) {
      console.error(err);
      return res.status(500).json({ Message: 'Erreur interne du serveur' });
  }
};

export const getUtilisateur = async (req, res) => {
  const cin = req.params.cin;
  console.log(cin);
  try {
    const sql = 'SELECT * FROM issat2.utilisateur WHERE cin = ?';
    db.query(sql, [cin], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', err);
        return res.status(500).json({ Message: 'Erreur lors de la récupération des données de l\'utilisateur' });
      } else {
        const utilisateur = results[0];
        console.log("Utilisateur :", utilisateur);
        return res.status(200).json({ Message: "Utlisateur récupéré avec succès", utilisateur });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ Message: 'Erreur interne du serveur' });
  }
};
