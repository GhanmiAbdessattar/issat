import Table from "react-bootstrap/Table";
import React from "react";
import { Modal, Space } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import UserDetail from "./UserDetail";
import Search from "antd/es/transfer/search";

const User = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);


  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: 'Modifier Utilisateur',
      icon: <ExclamationCircleFilled />,
      content: <UserDetail />,
      
 
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
    content:  <UserDetail />,
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
      <div className="mb-2">
      <Search placeholder="rechercher un utilisateur"    onSearch={onSearch} enterButton />
      </div>
      <Table responsive="xl">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Role</th>
            <th>Télephonne</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
          <tr>
            <td>02</td>
            <td>GHANMI ABDESSATAR</td>
            <td>Télécommunication</td>
            <td>Reseaux</td>
            <td>ghanmiabdessattar1@gmail.com</td>
            <td>20480465</td>
            <td>
            <div className="d-flex">
              <Space wrap>
                   <Button   size={"small"}  onClick={showConfirm}>Modifier</Button>
                </Space>
                <Space wrap>
                   <Button danger size={"small"} onClick={showDeleteConfirm}>Supprimer</Button>
                </Space>

              </div>
            </td>
          
          </tr>
      
          <tr>
            <td>04</td>
            <td>GHANMI ABDESSATAR</td>
            <td>Electronique</td>
            <td>Electronique</td>
            <td>ghanmiabdessattar1@gmail.com</td>
            <td>20480465</td>
            <td>
            <div className="d-flex">
              <Space wrap>
                   <Button   size={"small"}  onClick={showConfirm}>Modifier</Button>
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

export default User;
