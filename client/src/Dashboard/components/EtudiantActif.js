import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { Modal, Space } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import EtudiantConfirm from "./EtudiantConfirm";

const EtudiantActif = () => {

  const [etudiantsData, setEtudiantsData] = useState([]);

  useEffect(() => {
   
    fetch('/getEtudiant/etudiant')
      .then((response) => response.json())
      .then((data) => {
     
        if (data.etudiants && Array.isArray(data.etudiants)) {
         
          setEtudiantsData(data.etudiants);
        } else {
          console.error('Invalid data format: "Etudiant" array not found or not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: 'Détail Etudiant',
      icon: <ExclamationCircleFilled />,
      content: <EtudiantConfirm />,
      
 
      width:'1000px',
      onOk() {
        console.log('OK');
      },
      
    });
  };

 
  
 const showDeleteConfirm = () => {
  
  confirm({
    title: 'Confirmer la suppression !!',
    icon: <ExclamationCircleFilled />,
    content:  <EtudiantConfirm />,
    okText: 'Confirmer',
    okType: 'danger',
    cancelText: 'Retour',
    width:'1000px',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};


  return (
    
    <div>
    <Table responsive="xl">
      <thead>
        <tr>
          <th>N°</th>
          <th>Nom_et_prénom</th>
          <th>Groupe</th>
          <th>Diplome</th>
          <th>Spécialité</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {etudiantsData.map((etudiants, index) => (
          <tr key={etudiants.id_ens}>
            <td>{index + 1}</td>
            <td>{etudiants.nom_fr } {etudiants.prenom_fr}</td>
            <td>{etudiants.passeport}</td>
            <td>{etudiants.diplome}</td>
            <td>{etudiants.specialite}</td>
            <td>{etudiants.Email}</td>
            <td>
          <div className="d-flex">
            <Space wrap>
                 <Button   success size={"small"}  onClick={showConfirm}>Détail</Button>
              </Space>
              <Space wrap>
                 <Button danger size={"small"} onClick={showDeleteConfirm}>Supprimer</Button>
              </Space>

            </div>
          </td>
          </tr>
        ))}
      </tbody>


      
    </Table>
  </div>

  );
};

export default EtudiantActif;
