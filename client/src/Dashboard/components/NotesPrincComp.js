import { Button, Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component"

const NotesPrincComp = () => {
  
    const handelDelete = (cin) =>{
        const confirm = window.confirm("would you lik to Delete !!!")
        if(confirm){
          axios.delete('/auth/DeleteNotePrinc/'+cin)
          .then(res => {
            window.location.reload(false);
          }).catch(err => console.log(err));
        }
      }


    useEffect(() => {
        fetch('/auth/getNotesPrinc')
        .then((response) => response.json())
        .then((data) => {
          if (data.Notes_Princ && Array.isArray(data.Notes_Princ)) {
            setRecord(data.Notes_Princ);
            setFilterRecord(data.Notes_Princ);
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
            selector:row => row.num_inscription,
            sortable: true
        },
        {
            name: "Module",
            selector:row => row.module,
            sortable: true
        },
        {
            name: "Matéire",
            selector:row => row.matiere,
            sortable: true
        },
        {
            name: "Note DS",
            selector:row => row.note_ds,
            sortable: true
        },
        {
            name: "Note examen",
            selector:row => row.note_exam,
            sortable: true
        },
        {
            name: "Moy",
            selector:row => row.moyenne,
            sortable: true
        },
        {
            name: "Créd",
            selector:row => row.credits,
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
        Liste des Notes Session Principale:
        </div>
        <Card>
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

export default NotesPrincComp