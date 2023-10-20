import React, { useState,useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";

const Resultat = () => {

  const [notes, setNotes] = useState([]);
  const cin = localStorage.getItem("userCin");

  useEffect(() => {
    if (cin) {
      axios.get(`/notes/${cin}`).then((response) => {
        setNotes(response.data.notes);
        
      });
    }
  }, [cin]);
  
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>N°</th>
            <th>Code etudiant</th>
            <th>Nom et prénom</th>
            <th>Niveau</th>
            <th>Groupe d'enseignement</th>
            <th>Semestre</th>
           
          </tr>
        </thead>
        <tbody>
        {notes.map((note, index) => (
          <tr key={index}>
            <td>{note.num_inscrit}</td>
            <td>{note.matiere}</td>
            <td>{note.credits}</td>
            <td>{note.note_expose}</td>
            
            <td>
              <Link to="DetailModule" >Detail</Link>
               {/*  ${note.module_id}   tawali tzid hathy fi lien detaail ki tekmel 5idma ama inty mouch 3amel rabet module w note maba3thoum fi base lazem ytrabtou twa bich injiblik mili table  notes w khaw  */}
            </td>
          </tr>
        ))}
       
        </tbody>

       
      </Table>
    </div>
  );
};

export default Resultat;
