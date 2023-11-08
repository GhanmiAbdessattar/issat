import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
const Moyenne = () => {

  const [ResultatPrinc, setResultatPrinc] = useState([]);
  const [ResultatRat, setResultatRat] = useState([]);

  useEffect(() => {
    // Récupérer le numéro CIN depuis le local storage
    const cin = localStorage.getItem('cin');
    console.log(cin)

    if(cin) {
      fetch(`/auth/getResultatPrincEtud/${cin}`)
      .then((response) => response.json())
      .then((data) => {

        if (data.resultat_principale) {

          setResultatPrinc(data.resultat_principale);
        } else {
          console.error('Invalid data format: "Note" array not found or not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    }
  }, []);


  useEffect(() => {
    // Récupérer le numéro CIN depuis le local storage
    const cin = localStorage.getItem('cin');
    console.log(cin)

    if(cin) {
      fetch(`/auth/getResultatRatEtud/${cin}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.resultat_rattrapage) {

          setResultatRat(data.resultat_rattrapage);
        } else {
          console.error('Invalid data format: "Note" array not found or not an array.');
        }
      })
      .catch((error) => {
        
        console.error('Error fetching data:', error);
        
      });

    }
  }, []);
  

  return (
    <div>
    <Table responsive="sm">
      <thead>
        <tr>
          <th>Année étude</th>
          <th>Code_etud</th>
          <th>Moyenne semestre 1</th>
          <th>Crédit semestre 1</th>
          <th>Moyenne semestre 2</th>
          <th>Crédit semestre 2</th>
          <th>Moyenne Génerale</th>
          <th>Crédit total</th>
          <th>Resultat</th>
         
        </tr>
      </thead>
      <tbody>
      {ResultatRat.map((resultat_rattrapage, index) => (
        <tr  key={resultat_rattrapage.id}>
          <td>{resultat_rattrapage.annee}</td>
          <td>{resultat_rattrapage.num_inscription}</td>
          <td>{resultat_rattrapage.moyenne_semestre_1}</td>
          <td>{resultat_rattrapage.credit_semestre_1}</td>
          <td>{resultat_rattrapage.moyenne_semestre_2}</td>
          <td>{resultat_rattrapage.credit_semestre_2}</td>
          <td>{resultat_rattrapage.moyenne_generale}</td>
          <td>{resultat_rattrapage.credit_total}</td>
          <td>{resultat_rattrapage.resultat}</td>
      
        </tr>
         
         ))}
      </tbody>
    </Table>
  </div>
  );

  
};

export default Moyenne;
