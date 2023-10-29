import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function EmploiCard() {


  const [emploiData, setEmploiData] = useState([]);

  useEffect(() => {

    

    fetch('/ajout/getemploi')
      .then(async (response) => response.json())
      .then((data) => {
        if (data) {
          setEmploiData(data.emploi);
        } else {
          console.error('Invalid data format: "Emploi" array not found or not an array.');
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
          {emploiData.map((emploi, index) => (
            <tr key={emploi.idemploi}>
              <td>{index + 1}</td>
              <td>{emploi.parcours_emp}</td>
              <td>{emploi.groupe}</td>
              <td><Link to={emploi.adresse}>{emploi.adresse}</Link></td>
              <td>{emploi.semestre}</td>
            </tr>


          ))}
        </tbody>
      </Table>

    </div>


  );
}

export default EmploiCard;