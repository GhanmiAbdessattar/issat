//import axios from 'axios';
import { Button, Card } from 'antd';
import axios from 'axios';

import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component"

const ResPrincComp = () => {

  const handelDelete = (cin) =>{
    const confirm = window.confirm("would you lik to Delete !!!")
    if(confirm){
      axios.delete('/auth/DeleteResultatPrinc/'+cin)
      .then(res => {
        window.location.reload(false);
      }).catch(err => console.log(err));
    }
  }

    useEffect(() => {
        fetch('/auth/getResultatPrinc')
        .then((response) => response.json())
        .then((data) => {
          if (data.resultat_principale && Array.isArray(data.resultat_principale)) {
            setRecord(data.resultat_principale);
            setFilterRecord(data.resultat_principale);
          } else {
            console.error('Invalid data format: "Note" array not found or not an array.');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  
}, []);

    const columns = [
        
        {
            name: "Code_etu",
            selector:row => row.nom_prenom_fr,
            sortable: true
        },
        {
            name: "Moy sem 1",
            selector:row => row.moyenne_semestre,
            sortable: true
        },
        {
            name: "Créd sem 1",
            selector:row => row.credit_semestre,
            sortable: true
        },
        {
            name: "Moy sem 2",
            selector:row => row.moyenne_semestre,
            sortable: true
        },
        {
            name: "Créd sem 2",
            selector:row => row.credit_semestre,
            sortable: true
        },
        {
            name: "Moy Gén",
            selector:row => row.resultat,
            sortable: true
        },
        {
            name: "Créd total",
            selector:row => row.credit_semestre,
            sortable: true
        },
          {
        name: "Action",
        cell: (row)=> ( <Button className="btn btn-sm btn-primary" onClick={e =>handelDelete(row.cin)}> Supprimer</Button>),
      
    }
       
    ];
     
    const [record, setRecord] = useState([]);
    const [filterRecord, setFilterRecord] = useState([]);
      const handelFilter =(e)=>{
              const newData = filterRecord.filter(row => row.nom_prenom_fr.toLowerCase().includes(e.target.value.toLowerCase()))
              setRecord(newData);
      }
      
      
  return (
    <div>
        <div>
        Resultat Session Principale:
        </div>
            <Card >
            <div className='container mt-5'>
            <div className='text-end'><input type="text" placeholder='rechercher...' onChange={handelFilter}/></div>
            <DataTable 
            columns={columns} 
            data={record}
            fixedHeader
            pagination
            />

            </div>
            </Card>

    </div>
  )
}

export default ResPrincComp