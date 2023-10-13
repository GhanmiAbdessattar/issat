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