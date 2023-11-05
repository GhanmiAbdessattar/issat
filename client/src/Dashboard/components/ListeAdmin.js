import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Button } from 'antd';
//import AdminDetail from "./AdminDetail";
import DataTable from "react-data-table-component";
const ListeAdmin = () => {
 
  
  useEffect(() => {
   
    fetch('/auth/getAdmin')
      .then((response) => response.json())
      .then((data) => {
     
        if (data.admin ) {
            setRecord(data.admin);
            setFilterRecord(data.admin);
        } else {
          console.error('Invalid data format: "EtudiantPassif" array not found or not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  const columns = [
 
    {
        name: "ID",
        selector:row => row.id,
        sortable: true
    },
    {
        name: "CIN",
        selector:row => row.cin,
        sortable: true
    },
    {
        name: "Email",
        selector:row => row.email,
        sortable: true
    },
    {
      name: "Role",
      selector:row => row.role,
      sortable: true
  },
    {
        name: "Action",
        cell: (row)=> ( <Button className="btn btn-sm btn-primary" onClick={()=>alert(row.nom_fr)}> Supprimer</Button>),
      
    }
   
  ];
  
  const [record, setRecord] = useState([]);
  const [filterRecord, setFilterRecord] = useState([]);
    const handelFilter =(e)=>{
            const newData = filterRecord.filter(row => row.email.toLowerCase().includes(e.target.value.toLowerCase()))
            setRecord(newData);
    }
  


  return (
    <div>
    <Card >
            <div className='container mt-5'>
            <div className='text-end'><input type="text" placeholder='rechercher...' onChange={handelFilter}/></div>
            <DataTable
            columns={columns} 
            data={record}
            fixedHeader
            pagination
            fixedHeaderScrollHeight="550px"
            highlightOnHover
            />

            </div>
            </Card>
  </div>
  );
};

export default ListeAdmin;
