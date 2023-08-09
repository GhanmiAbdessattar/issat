import Table from "react-bootstrap/Table";
import React from "react";
import { Modal, Space } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import EtudiantConfirm from "./EtudiantConfirm";

const Etudiant = () => {
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
            <th>N°_Inscription</th>
            <th>CIN</th>
            <th>Nom_et_prénom</th>
            <th>Diplôme</th>
            <th>Niveau</th>
            <th>Spécialité</th>
            <th>Etat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>12345</td>
            <td>1135198</td>
            <td>Harbaoui Roudayna</td>
            <td>MP-EN-Réseaux et Télécommunication</td>
            <td>1</td>
            <td>1 ère MP RT(Nouveaux)</td>
            <td>Actif</td>
            <td>
            <div className="d-flex">
              <Space wrap>
                   <Button  success size={"small"}  onClick={showConfirm}>Confirmer</Button>
                </Space>
                <Space wrap>
                   <Button danger size={"small"} onClick={showDeleteConfirm}>Supprimer</Button>
                </Space>

              </div>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>12345</td>
            <td>1135198</td>
            <td>Ghanmi Abdessattar</td>
            <td>MP-EN-Réseaux et Télécommunication</td>
            <td>1</td>
            <td>1 ère MP RT(Nouveaux)</td>
            <td>Actif</td>
            <td>
              <div className="d-flex">
              <Space wrap>
                   <Button  success size={"small"}  onClick={showConfirm}>Confirmer</Button>
                </Space>
                <Space wrap>
                   <Button danger size={"small"} onClick={showDeleteConfirm}>Supprimer</Button>
                </Space>

              </div>
               
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>12345</td>
            <td>1135198</td>
            <td>Harbaoui Roudayna</td>
            <td>MP-EN-Réseaux et Télécommunication</td>
            <td>1</td>
            <td>1 ère MP RT(Nouveaux)</td>
            <td>Actif</td>
            <td>
            <div className="d-flex">
              <Space wrap>
                   <Button  success size={"small"}  onClick={showConfirm}>Confirmer</Button>
                </Space>
                <Space wrap>
                   <Button danger size={"small"} onClick={showDeleteConfirm}>Supprimer</Button>
                </Space>

              </div>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>12345</td>
            <td>1135198</td>
            <td>Ghanmi Abdessattar</td>
            <td>MP-EN-Réseaux et Télécommunication</td>
            <td>1</td>
            <td>1 ère MP RT(Nouveaux)</td>
            <td>Actif</td>
            <td>
            <div className="d-flex">
              <Space wrap>
                   <Button  success size={"small"}  onClick={showConfirm}>Confirmer</Button>
                </Space>
                <Space wrap>
                   <Button danger size={"small"} onClick={showDeleteConfirm}>Supprimer</Button>
                </Space>

              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Etudiant;
