import { Button, Card } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component"

const ResRatComp = () => {
    

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
              fetch('/auth/getResultatRat')
              .then((response) => response.json())
              .then((data) => {
                if (data.resultat_rattrapage && Array.isArray(data.resultat_rattrapage)) {
                  setRecord(data.resultat_rattrapage);
                  setFilterRecord(data.resultat_rattrapage);
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
            selector:row => row.moyenne_semestre_1,
            sortable: true
        },
        {
            name: "Créd sem 1",
            selector:row => row.credit_semestre_1,
            sortable: true
        },
        {
            name: "Moy sem 2",
            selector:row => row.moyenne_semestre_2,
            sortable: true
        },
        {
            name: "Créd sem 2",
            selector:row => row.credit_semestre_2,
            sortable: true
        },
        {
            name: "Moy Gén",
            selector:row => row.moyenne_generale,
            sortable: true
        },
        {
            name: "Créd total",
            selector:row => row.credit_total,
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
        Resultat Session Rattrappage:
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

export default ResRatComp