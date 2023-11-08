import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const ModuleDexiemSem = () => {

  const [DetailNote, setDetailNote] = useState([]);

  useEffect(() => {
    // Récupérer le numéro CIN depuis le local storage
    const cin = localStorage.getItem('cin');
    console.log(cin)

    if(cin) {
      fetch(`/auth/getNotesDexiemSemestre/${cin}`)
      .then((response) => response.json())
      .then((data) => {

        if (data.Notes && Array.isArray(data.Notes)) {

          setDetailNote(data.Notes);
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
            <th>N°</th>
            <th>Module</th>
            <th>Matiére</th>
            <th>Examen</th>
            <th>DS</th>
            <th>TP</th>
            <th>Oral</th>
            <th>Exposé</th>
            <th>Exercice</th>
            <th>Autre_Pres</th>
            <th>Autre</th>
            <th>Moyenne</th>
            <th>Crédit</th>
          </tr>
        </thead>
        <tbody>
            {DetailNote.map((Notes, index) => (
              
              <tr key={Notes.id}>
                <td>{index + 1}</td>
                <td>{Notes.module}</td>
                <td>{Notes.matiere}</td>
                <td>{Notes.note_exam}</td>
                <td>{Notes.note_ds}</td>
                <td>{Notes.note_tp}</td>
                <td>{Notes.note_oral}</td>
                <td>{Notes.note_expose}</td>
                <td>{Notes.note_exercice}</td>
                <td>{Notes.autre_presentielle}</td>
                <td>{Notes.autre_note}</td>
                <td>{Notes.moyenne}</td>
                <td>{Notes.credits}</td>
                
              </tr>
            ))}
        </tbody>
      </Table>



    </div>
  );
};

export default ModuleDexiemSem;
