import React, { useState } from 'react'
import DataTable from "react-data-table-component"

const NotesPrincComp = () => {
    const columns = [
        {
            name:'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector:row => row.name,
            sortable: true
        }
    ];

    const data = [
        {
            id:1,
            name: 'ghanmi',
            email: 'ghanmi@gmail.com'
        },
        {
            id:2,
            name: 'abdessattar',
            email: 'ghanmi@gmail.com'
        },
        {
            id:3,
            name: 'anwer',
            email: 'ghanmi@gmail.com'
        },
        {
            id:4,
            name: 'dalii',
            email: 'ghanmi@gmail.com'
        },
        {
            id:5,
            name: 'aymen',
            email: 'ghanmi@gmail.com'
        },
        {
            id:6,
            name: 'hichem',
            email: 'ghanmi@gmail.com'
        },
        {
            id:7,
            name: 'ali',
            email: 'ghanmi@gmail.com'
        },
        {
            id:8,
            name: 'emna',
            email: 'ghanmi@gmail.com'
        },
        {
            id:9,
            name: 'dali',
            email: 'ghanmi@gmail.com'
        },
        {
            id:10,
            name: 'anis',
            email: 'ghanmi@gmail.com'
        },
        {
            id:11,
            name: 'hafedh',
            email: 'ghanmi@gmail.com'
        }
    ]

    const [records, setRecords] = useState(data);

    const handelFilter =(e)=>{
            const newData = data.filter(row =>{
                return row.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            })
            setRecords(newData)
    }


  return (
    <div>
        <div>
        Liste des Notes Session Principale:
        </div>
        <div className='text-end'><input type="text" placeholder='rechercher...' onChange={handelFilter}/></div>
            <DataTable
            columns={columns}
            data={records}
            selectableRows
            fixedHeader
            pagination
            
            ></DataTable>

    </div>
  )
}

export default NotesPrincComp