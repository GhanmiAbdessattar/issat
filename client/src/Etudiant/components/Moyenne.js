import Table from "react-bootstrap/Table";
import React from "react";
const Moyenne = () => {

  

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
        <tr >
          <td>2022-2023</td>
          <td>10196634</td>
          <td></td>
          <td>2 MP SSR</td>
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
