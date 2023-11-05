import Search from 'antd/es/transfer/search';
import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
//import axios from 'axios';



const EnseignantsEtudiant = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);


  const [enseignantData, setEnseignantData] = useState([]);

  useEffect(() => {

    fetch('/auth/enseignant')
      .then((response) => response.json())
      .then((data) => {

        if (data.enseignant && Array.isArray(data.enseignant)) {

          setEnseignantData(data.enseignant);
          //console.log("enseignant",data.enseignant)
        } else {
          console.error('Invalid data format: "Enseignant" array not found or not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);




  return (
    <div>
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/acceuil">Acceuil</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Listes Enseignants:
              </li>
            </ol>
          </nav>
        </div>
        <div>
          <div className="mt-2">
               <h5 className="mb-4"> Liste des Enseignants:</h5>
           </div>
        
      </div>
      </div>

      <div>
      <div className="mb-2">
      <Search placeholder="rechercher un enseignant"    onSearch={onSearch} enterButton />
      </div>
   
        <Table responsive="xl">
          <thead>
            <tr>
              <th>N°</th>
              <th>Nom_et_prénom</th>
              <th>Département</th>
              <th>Spécialité</th>
              <th>Email</th>
              <th>Télephonne</th>
             
            </tr>
          </thead>
          <tbody>
            {enseignantData.map((enseignant, index) => (
              <tr key={enseignant.id_ens}>
                <td>{index + 1}</td>
                <td>{enseignant.Nom} {enseignant.Prenom}</td>
                <td>{enseignant.Departement}</td>
                <td>{enseignant.Specialite}</td>
                <td>{enseignant.Email}</td>
                <td>{enseignant.Tel}</td>
                
              </tr>
            ))}
          </tbody>



        </Table>
      </div>
    </div>

  );
};

export default EnseignantsEtudiant;
