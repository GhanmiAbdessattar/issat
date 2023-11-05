import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Button } from 'antd';
import DataTable from "react-data-table-component";

const EtudiantActif = () => {

  useEffect(() => {
   
    fetch('/getEtudiant/etudiant')
      .then((response) => response.json())
      .then((data) => {
     
        if (data.etudiants) {
         
          setRecord(data.etudiants);
          setFilterRecord(data.etudiants);
        } else {
          console.error('Invalid data format: "Etudiant" array not found or not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const columns = [
 
    {
        name: "Nom_Prénom",
        selector:row => row.nom_fr,
        sortable: true
    },
    {
        name: "Groupe",
        selector:row => row.passeport,
        sortable: true
    },
    {
        name: "Diplome",
        selector:row => row.diplome,
        sortable: true
    },
    {
        name: "Spécialité",
        selector:row => row.specialite,
        sortable: true
    },
    {
        name: "Email",
        selector:row => row.Email,
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
            const newData = filterRecord.filter(row => row.nom_fr.toLowerCase().includes(e.target.value.toLowerCase()))
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
            actions={<button className="btn btn-sm btn-info">Export Excel</button>}
            />

            </div>
            </Card>
  </div>

  );
};

export default EtudiantActif;
