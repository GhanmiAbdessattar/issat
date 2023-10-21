import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import XLSX from 'xlsx';

export const ajoutetudiant = ( req, res) => {
    
    const workbook = XLSX.read(req.file.buffer ,{ type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    console.log(data)
   

    if (data.length>0){
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
    }else{
        console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
        res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

    }
  
 
}

export const ajoutenseignant = ( req, res) => {
    
  const workbook = XLSX.read(req.file.buffer ,{ type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)
 

  if (data.length>0){
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
  }else{
      console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
      res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }


}


export const ajoutemploi = ( req, res) => {
    
  const workbook = XLSX.read(req.file.buffer ,{ type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)
 

  if (data.length>0){
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
  }else{
      console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
      res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }


}

export const ajoutuser = ( req, res) => {
    
  const workbook = XLSX.read(req.file.buffer ,{ type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)
 

  if (data.length>0){
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
  }else{
      console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
      res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }


}

//ajouter les resultats
export const ajoutresultat = ( req, res) => {
    
  const workbook = XLSX.read(req.file.buffer ,{ type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)
 

  if (data.length>0){
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
  }else{
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
export const ajoutnotes = ( req, res) => {
    
  const workbook = XLSX.read(req.file.buffer ,{ type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  console.log(data)
 

  if (data.length>0){
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
      res.json({ message: 'Données importées avec succès' });
      console.log('Données importées avec succès')
    }
  });
  }else{
      console.error('Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:');
      res.status(500).json({ message: 'Erreur lors de du l\'upload du fichier, merci de verifier le fichier selectionnée:' });

  }


}


export const ajoutparcours = ( req, res) => {

  res.send("hi")
}