import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { Modal, Space } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import EnseignantDetail from "./EnseignantDetail";

const Enseignant = () => {

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
          {enseignantData.map((enseignant, index) => (
            <tr key={enseignant.id_ens}>
              <td>{index + 1}</td>
              <td>{enseignant.Nom } {enseignant.Prenom}</td>
              <td>{enseignant.Departement}</td>
              <td>{enseignant.Specialite}</td>
              <td>{enseignant.Email}</td>
              <td>{enseignant.Tel}</td>
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

export default Enseignant;
