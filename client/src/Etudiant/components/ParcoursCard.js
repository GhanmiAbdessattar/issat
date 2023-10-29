import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


function ParcoursCard() {

  const [parcoursData, setParcoursData] = useState([]);

  useEffect(() => {

    fetch('/ajout/getparcours')
      .then((response) => response.json())
      .then((data) => {

        if (data.parcours && Array.isArray(data.parcours)) {

          setParcoursData(data.parcours);
          //console.log("enseignant",data.enseignant)
        } else {
          console.error('Invalid data format: "Parcours" array not found or not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);





  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Groupe</th>
          <th>Titre</th>
          <th>Visualiser</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {parcoursData.map((parcours, index) => (
        <tr key={parcours.id_parc}>
          <td>{index + 1}</td>
          <td>{parcours.code_parc }</td>
          <td>{parcours.groupe}</td>
          <td><Link to={parcours.adresse}>{parcours.adresse}</Link></td>
          <td>{parcours.groupe}</td>
        </tr>
       
       
         ))}
      </tbody>
    </Table>

    </div>
  );
}

export default ParcoursCard;