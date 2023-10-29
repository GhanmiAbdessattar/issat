import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import XLSX from 'xlsx';
import mime from 'mime-types';

export const ajoutetudiant = (req, res) => {

  const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)


  if (data.length > 0) {
    // Insérez les données dans la base de données MySQL
    const sql = 'INSERT INTO issat2.etudiant (Num_inscription, mat_cin, nom_ar, prenom_ar, nom_fr, prenom_fr, sexe, situation_familiale, date_naissance, lieu_naiss_ar, lieu_naiss_fr, statut, passeport, Adresse_Francais, Adresse_Arabe, Code_gouvernera, Email, Telephone_Fixe, Telephone_Portable, Code_Nature_Bac ) VALUES ?';
    const values = data.map((row) => [
      row['Num_inscription'],
      row['mat_(cin)'],
      row['nom_ar'],
      row['prénom_ar'],
      row['nom_fr'],
      row['prénom_fr'],
      row['sexe'],
      row['situation_familiale'],
      row['date_naissance'],
      row['lieu_naiss_ar'],
      row['lieu_naiss_fr'],
      row['statut'],
      row['passeport'],
      row['Adresse_Français'],
      row['Adresse_Arabe'],
      row['Code_gouvernera'],
      row['Email'],
      row['Telephone_Fixe'],
      row['Telephone_Portable'],
      row['Code_Nature_Bac'],

    ]);

    db.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        res.status(500).json({ message: 'Erreur lors de l\'importation des données' });
      } else {
        res.json({ message: 'Données importées avec succès' });
        console.log('Données importées avec succès')
      }
    });
  } else {
    console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
    res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }


}

export const ajoutenseignant = (req, res) => {

  const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)


  if (data.length > 0) {
    // Insérez les données dans la base de données MySQL
    const sql = 'INSERT INTO issat2.enseignant (Num_inscription, mat_cin, nom_ar, prénom_ar, nom_fr, prénom_fr, sexe, situation_familiale, date_naissance, lieu_naiss_ar, lieu_naiss_fr, statut, passeport, Adresse_Francais, Adresse_Arabe, Code_gouvernera, Email, Telephone_Fixe, Telephone_Portable, Code_Nature_Bac ) VALUES ?';
    const values = data.map((row) => [
      row['Num_inscription'],
      row['mat_(cin)'],
      row['nom_ar'],
      row['prénom_ar'],
      row['nom_fr'],
      row['prénom_fr'],
      row['sexe'],
      row['situation_familiale'],
      row['date_naissance'],
      row['lieu_naiss_ar'],
      row['lieu_naiss_fr'],
      row['statut'],
      row['passeport'],
      row['Adresse_Français'],
      row['Adresse_Arabe'],
      row['Code_gouvernera'],
      row['Email'],
      row['Telephone_Fixe'],
      row['Telephone_Portable'],
      row['Code_Nature_Bac'],

    ]);

    db.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        res.status(500).json({ message: 'Erreur lors de l\'importation des données' });
      } else {
        res.json({ message: 'Données importées avec succès' });
        console.log('Données importées avec succès')
      }
    });
  } else {
    console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
    res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }


}


export const ajoutemploiss = (req, res) => {

  const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)


  if (data.length > 0) {
    // Insérez les données dans la base de données MySQL
    const sql = 'INSERT INTO issat2.emploi (parcours_emp, niveau, groupe, adresse, semestre, annee_scol_emp, date_ajout_emp ) VALUES ?';
    const values = data.map((row) => [
      row['Num_inscription'],
      row['mat_(cin)'],
      row['nom_ar'],
      row['prénom_ar'],
      row['nom_fr'],
      row['prénom_fr'],
      row['sexe'],
      row['situation_familiale'],
      row['date_naissance'],
      row['lieu_naiss_ar'],
      row['lieu_naiss_fr'],
      row['statut'],
      row['passeport'],
      row['Adresse_Français'],
      row['Adresse_Arabe'],
      row['Code_gouvernera'],
      row['Email'],
      row['Telephone_Fixe'],
      row['Telephone_Portable'],
      row['Code_Nature_Bac'],

    ]);

    db.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        res.status(500).json({ message: 'Erreur lors de l\'importation des données' });
      } else {
        res.json({ message: 'Données importées avec succès' });
        console.log('Données importées avec succès')
      }
    });
  } else {
    console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
    res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }


}

export const ajoutuser = (req, res) => {

  const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)


  if (data.length > 0) {
    // Insérez les données dans la base de données MySQL
    const sql = 'INSERT INTO issat2.enseignant (Num_inscription, mat_cin, nom_ar, prénom_ar, nom_fr, prénom_fr, sexe, situation_familiale, date_naissance, lieu_naiss_ar, lieu_naiss_fr, statut, passeport, Adresse_Francais, Adresse_Arabe, Code_gouvernera, Email, Telephone_Fixe, Telephone_Portable, Code_Nature_Bac ) VALUES ?';
    const values = data.map((row) => [
      row['Num_inscription'],
      row['mat_(cin)'],
      row['nom_ar'],
      row['prénom_ar'],
      row['nom_fr'],
      row['prénom_fr'],
      row['sexe'],
      row['situation_familiale'],
      row['date_naissance'],
      row['lieu_naiss_ar'],
      row['lieu_naiss_fr'],
      row['statut'],
      row['passeport'],
      row['Adresse_Français'],
      row['Adresse_Arabe'],
      row['Code_gouvernera'],
      row['Email'],
      row['Telephone_Fixe'],
      row['Telephone_Portable'],
      row['Code_Nature_Bac'],

    ]);

    db.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        res.status(500).json({ message: 'Erreur lors de l\'importation des données' });
      } else {
        res.json({ message: 'Données importées avec succès' });
        console.log('Données importées avec succès')
      }
    });
  } else {
    console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
    res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }


}

//ajouter les resultats
export const ajoutresultat = (req, res) => {

  const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)


  if (data.length > 0) {
    // Insérez les données dans la base de données MySQL
    const sql = 'INSERT INTO issat2.note (annee, session, semestre, parcours, matiere, niveau, num_inscrit, cin, nom_fr, nom_ar, groupe, note_exam, note_ds, note_tp, note_oral, note_expose, note_exercice, autre_presentielle, autre_note, moyenne, credits, dispense) VALUES ?';
    const values = data.map((row) => [
      row['Année'],
      row['Session'],
      row['Semestre'],
      row['Parcours'],
      row['Matiere'],
      row['Niveau'],
      row['N°_Inscription'],
      row['CIN'],
      row['Nom_&_Prénom_Fr'],
      row['Prénom_&_Nom_Ar'],
      row['Groupe'],
      row['Examen'],
      row['DS'],
      row['TP'],
      row['Oral'],
      row['Expose'],
      row['Exercice'],
      row['Autre_presentielle'],
      row['Autre'],
      row['Moyenne'],
      row['Crédits'],
      row['Dispense'],

    ]);

    db.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        res.status(500).json({ message: 'Erreur lors de l\'importation des données' });
      } else {
        res.json({ message: 'Données importées avec succès' });
        console.log('Données importées avec succès')
      }
    });
  } else {
    console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
    res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }


}





/*
 // Insérez les données dans la base de données MySQL
    const sql = 'INSERT INTO issat2.note (note_exam, note_DS, note_TP, note_Oral) VALUES ?';
    const values = data.map((row) => [
      row['note_exam'],
      row['note_DS'],
      row['note_TP'],
      row['note_Oral'],

*/

//ajouter les notes
export const ajoutnotes = (req, res) => {

  const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)


  if (data.length > 0) {
    // Insérez les données dans la base de données MySQL
    const sql = 'INSERT INTO issat2.note_principale (annee, semestre, parcours, module, matiere, niveau, num_inscription, cin, nom_fr, nom_ar, groupe, note_exam, note_ds, note_tp, note_oral, note_expose, note_exercice, autre_presentielle, autre_note, moyenne, credits, dispense) VALUES ?';
    const values = data.map((row) => [
      row['Annee'],
      row['Semestre'],
      row['Parcours'],
      row['Module'],
      row['Matiere'],
      row['Niveau'],
      row['N_Inscription'],
      row['CIN'],
      row['Nom_Prenom_Fr'],
      row['Prenom_Nom_Ar'],
      row['Groupe'],
      row['Examen'],
      row['DS'],
      row['TP'],
      row['Oral'],
      row['Expose'],
      row['Exercice'],
      row['Autre_presentielle'],
      row['Autre'],
      row['Moyenne'],
      row['Credits'],
      row['Dispense'],

    ]);

    db.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        res.status(500).json({ message: 'Erreur lors de l\'importation des données' });
      } else {
        res.status(200).json({ message: 'Données importées avec succès' });
        console.log('Données importées avec succès')
      }
    });
  } else {
    console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
    res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }


}


export const ajoutparcours = (req, res) => {

  const file = req.file
  console.log("pdfFile", file)
  if (!file) {
    return res.status(400).json('Aucun fichier n\'a été envoyé.');
  }
  // Vérifier le type de fichier
  const fileExtension = mime.extension(file.mimetype);
  console.log(fileExtension)
  if (fileExtension !== 'pdf') {
    return res.status(400).json('Le fichier n\'est pas au format PDF.');
  }
  if (file) {
    // Insérez les données dans la base de données MySQL
    // Modifiez le nom du fichier en supprimant l'extension et les espaces
    const modifiedFilename = file.originalname.replace('_', '').replace('.pdf', '');
    const code_parc = modifiedFilename;
    console.log("code_parc", code_parc)
    const groupe = file.filename.replace('_', '').replace('.pdf', '');
    console.log("groupe:", groupe)
    const adresse = file.path;
    const timestamp = Date.now();
    const date = new Date(timestamp);
    console.log("date ajout:", date)
    console.log("adresse:", adresse)


    db.query('INSERT INTO issat2.parcours SET code_parc=?, groupe=?, date_ajout=?, adresse=?', [code_parc, groupe, date, adresse], (err, result) => {

      if (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        res.status(400).json({ message: 'Erreur lors de l\'importation des données' });
      } else {
        res.status(200).json({ message: 'Fichier PDF reçu et sauvegardé avec succès' });
        console.log('Fichier PDF reçu et sauvegardé avec succès')
      }
    });
  } else {
    console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
    res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }

}


export const getparcours = (req, res) => {

  const sql = 'SELECT * FROM issat2.parcours';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données :', err);
      res.status(404).json({ Message: 'Erreur lors de la récupération des données' });
    } else {

      console.log("resultat:", results);

      //res.json({ etudiant: results });
      return res.status(200).json({ Message: " Liste des parcours recuperer avec Success", parcours: results });

    }
  });
}




export const ajoutemploi = (req, res) => {

  const IRS = req.body.IRS
  console.log("IRS", IRS)
  const file = req.file
  console.log("pdfFile", file)
  if (!file) {
    return res.status(400).json('Aucun fichier n\'a été envoyé.');
  }
  // Vérifier le type de fichier
  const fileExtension = mime.extension(file.mimetype);
  console.log(fileExtension)
  if (fileExtension !== 'pdf') {
    return res.status(400).json('Le fichier n\'est pas au format PDF.');
  }
  if (file) {
    // Insérez les données dans la base de données MySQL
    // Modifiez le nom du fichier en supprimant l'extension et les espaces
    const modifiedFilename = file.originalname.replace('_', '').replace('.pdf', '');
    const parcours_emp = modifiedFilename;
    console.log("parcours_emp", parcours_emp)
    const groupe = file.filename.replace('_', '').replace('.pdf', '');
    console.log("groupe:", groupe)
    const adresse = file.path;
    const timestamp = Date.now();
    const date = new Date(timestamp);
    console.log("date ajout:", date)
    console.log("adresse:", adresse)
    const semestre = "01";
    const annee_scol = "2023";

    db.query('INSERT INTO issat2.emploi SET parcours_emp=?, niveau=?, groupe=?, adresse=?, semestre=?, annee_scol_emp=?, date_ajout_emp=?', [parcours_emp, IRS, groupe, adresse, semestre, annee_scol, date], (err, result) => {

      if (err) {
        console.error('Erreur lors de l\'insertion du fichier :', err);
        res.status(400).json({ message: 'Erreur lors de l\'importation du fichier' });
      } else {
        res.status(200).json({ message: 'Emploi reçu et sauvegardé avec succès' });
        console.log('Emploi reçu et sauvegardé avec succès')
      }
    });
  } else {
    console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
    res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }

}


export const getemploi = async (req, res) => {

  const sql = 'SELECT * FROM issat2.emploi';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données :', err);
      res.status(404).json({ Message: 'Erreur lors de la récupération des données' });
    } else {

      console.log("Emploi:", results);
      const emploi = results
      return res.status(200).json({ Message: " Liste des emplois recuperer avec Success", emploi });

    }
  });
}