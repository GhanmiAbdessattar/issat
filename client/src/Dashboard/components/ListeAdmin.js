import Table from "react-bootstrap/Table";
import React from "react";
import { Modal, Space } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import AdminDetail from "./AdminDetail";
const ListeAdmin = () => {
 
  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: 'Détail Admin',
      icon: <ExclamationCircleFilled />,
      content: <AdminDetail />,
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

 
  
 const showDeleteConfirm = () => {
  
  confirm({
    title: 'Confirmer la suppression !!',
    icon: <ExclamationCircleFilled />,
    content:  <AdminDetail />,
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
            <th>Role</th>
            <th>Email</th>
            <th>Etat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>1135198</td>
            <td>Ghanmi Abdessattar</td>
            <td>Admin</td>
            <td>ghanmiabdessattar1@gmail.com</td>
            <td>Actif</td>
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
          <tr>
            <td>02</td>
            <td>1135198</td>
            <td>Harbaoui Roudayna</td>
            <td>Admin</td>
            <td>Harbaoui@gmail.com</td>
            <td>Actif</td>
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
        </tbody>
      </Table>
    </div>
  );
};

export default ListeAdmin;
