import React, { useEffect, useState } from "react";
import { Card} from "antd";
import { Button } from 'antd';
import DataTable from "react-data-table-component";
import axios from "axios";

const Enseignant = () => {

  const handelDelete = (ident) =>{
    const confirm = window.confirm("would you lik to Delete !!!")
    if(confirm){
      axios.delete('/auth/DeleteEnseignant/'+ident)
      .then(res => {
        window.location.reload(false);
      }).catch(err => console.log(err));
    }
  }
 
  useEffect(() => {
   
    fetch('/auth/enseignant')
      .then((response) => response.json())
      .then((data) => {
     
        if (data.enseignant) {
         
          setRecord(data.enseignant);
          setFilterRecord(data.enseignant);
        } else {
          console.error('Invalid data format: "Enseignant" array not found or not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const columns = [
    {
      name: "ID",
      selector:row => row.Ident,
      sortable: true
  },
     {
        name: "Nom",
        selector:row => row.Nom,
        sortable: true
    },
    {
        name: "Prénom",
        selector:row => row.Prenom,
        sortable: true
    },
    {
        name: "Département",
        selector:row => row.Departement,
        sortable: true
    },
    {
        name: "Email",
        selector:row => row.Email,
        sortable: true
    },
    {
        name: "Action",
        cell: (row)=> ( <Button className="btn btn-sm btn-primary" onClick={e =>handelDelete(row.Ident)}> Supprimer</Button>),
      
    }
   
  ];
  
  const [record, setRecord] = useState([]);
  const [filterRecord, setFilterRecord] = useState([]);
    const handelFilter =(e)=>{
            const newData = filterRecord.filter(row => row.Nom.toLowerCase().includes(e.target.value.toLowerCase()))
            setRecord(newData);
    }


  return (
    <div>
    <Card >
            <div className='container mt-5' >
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

export default Enseignant;
