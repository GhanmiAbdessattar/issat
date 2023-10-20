import Table from "react-bootstrap/Table";
import React, { useState,useEffect } from "react";
import axios from "axios";
const Moyenne = () => {

  const [etudiantData, setEtudiantData] = useState([]);

  useEffect(() => {
    // Récupérer le CIN du localStorage
    const cin = localStorage.getItem("userCIN");
    
    // Vérifier si le CIN est défini
    if (cin) {
      // Effectuer une requête GET vers le serveur pour obtenir les résultats de l'étudiant
      axios.get(`/getEtudiant/etudiant/${cin}`)
        .then((res) => {
          // Mettre à jour l'état avec les données de l'étudiant
          //console.log(res);
          const Etudiant = res.data.etudiant;
          setEtudiantData(Etudiant);
       
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données de l'étudiant :", error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div>
    <Table responsive="sm">
      <thead>
        <tr>
          <th>Année étude</th>
          <th>Code etudiant</th>
          <th>Nom et prénom</th>
          <th>Groupe d'enseignement</th>
          <th>Moyenne semestre</th>
          <th>Crédit semestre</th>
          <th>Rang</th>
        </tr>
      </thead>
      <tbody>
      
        <tr>
          <td>2022-2023</td>
          <td>{etudiantData.mat_cin}</td>
          <td>{etudiantData.nom_fr}  {etudiantData.prenom_fr}</td>
          <td>{etudiantData.passeport}</td>
          <td>12,02</td>
          <td>30</td>
          <td>5</td>
        </tr>
      </tbody>
    </Table>
  </div>
  );

  
};

export default Moyenne;
