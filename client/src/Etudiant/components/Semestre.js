import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";

const Semestre = () => {


  const [DetailNote, setDetailNote] = useState([]);

  useEffect(() => {
    // Récupérer le numéro CIN depuis le local storage
    const cin = localStorage.getItem('cin');
    console.log(cin)

    if(cin) {
      fetch(`/auth/getNotes/${cin}`)
      .then((response) => response.json())
      .then((data) => {

        if (data.Notes && Array.isArray(data.Notes)) {

          setDetailNote(data.Notes);
          //console.log("enseignant",data.enseignant)
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
            <th>Semestre</th>
            <th>Specialité</th>
            <th>Session</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Semestre 1</td>
            <td>SIL G-2</td>
            <td>Principale</td>
            <td>
              <Link to="DetailSemestre">Detail</Link>
            </td>
          </tr>
          <tr>
            <td>Semestre 2</td>
            <td>SIL G-2</td>
            <td>Principale</td>
            <td>
              <Link to="DetailSemestre">Detail</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Semestre;
