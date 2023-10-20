import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { Modal, Space } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import AdminDetail from "./AdminDetail";
const ListeAdmin = () => {
 
  const [adminData, setAdminData] = useState([]);
  useEffect(() => {
    // Make an API request to fetch user data
    fetch('/auth/getAdmin')
      .then((response) => response.json())
      .then((data) => {
        const admin = data.admin
        if (data.admin && Array.isArray(data.admin)) {
        
          setAdminData(admin);
        } else {
          console.error('Invalid data format: "admin" array not found or not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


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
            <th>ID</th>
            <th>CIN</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {adminData.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.cin}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
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

export default ListeAdmin;
