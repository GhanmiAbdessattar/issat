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
          <th>Moyenne semestre 1</th>
          <th>Crédit semestre 1</th>
          <th>Moyenne semestre 2</th>
          <th>Crédit semestre 2</th>
          <th>Moyenne Génerale</th>
          <th>Crédit total</th>
         
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>2022-2023</td>
          <td>10196634</td>
          <td>12,02</td>
          <td>30</td>
          <td>12</td>
          <td>30</td>
          <td>12,8</td>
          <td>60</td>
      
        </tr>
         

      </tbody>
    </Table>
  </div>
  );

  
};

export default Moyenne;
