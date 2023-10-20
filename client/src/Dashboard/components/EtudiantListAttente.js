import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from 'react';
import { Modal, Space } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import EtudiantConfirm from "./EtudiantConfirm";

const EtudiantListAttente = () => {

  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    // Make an API request to fetch student data
    fetch('/getEtudiant/etudiant')
      .then((response) => response.json())
      .then((data) => {
     
        if (data.etudiants && Array.isArray(data.etudiants)) {
          // Filter students with 'Actif' status (case-insensitive, trimmed)
          const filteredStudents = data.etudiants.filter((student) => student.statut_etud.trim().toLowerCase() === 'passif');
          setStudentData(filteredStudents);
          console.log(filteredStudents)
        } else {
          console.error('Invalid data format: "etudiants" array not found or not an array.');
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
      okText: 'Confirmer',
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
            <th>CIN</th>
            <th>Nom_et_prénom</th>
            <th>Niveau</th>
            <th>Spécialité</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.mat_cin}</td>
              <td>{student.nom_fr + ' ' + student.prenom_fr}</td>
              <td>{student.passeport}</td>
              <td>{student.specialite}</td>
              <td>
              <div className="d-flex">
              <Space wrap>
                   <Button  success size={"small"}  onClick={showConfirm}>Détail</Button>
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

export default EtudiantListAttente;
