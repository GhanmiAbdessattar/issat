import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import {Modal, Space } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import EnseignantDetail from "./EnseignantDetail";

const Enseignant = () => {

  const [enseignantData, setEnseignantData] = useState([]);
  useEffect(() => {
    // Make an API request to fetch student data
    fetch('/auth/getEnseignant')
      .then((response) => response.json())
      .then((data) => {
     
        if (data.enseignants && Array.isArray(data.enseignants)) {
         
          setEnseignantData(data.enseignants);
          console.log(data.enseignants)
        } else {
          console.error('Invalid data format: "enseignants" array not found or not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: 'Détail Enseignant',
      icon: <ExclamationCircleFilled />,
      content: <EnseignantDetail />,
      
 
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
    content:  <EnseignantDetail />,
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
            <th>Département</th>
            <th>Spécialité</th>
            <th>Email</th>
            <th>Télephonne</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {enseignantData.map((student, index) => (
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

export default Enseignant;
