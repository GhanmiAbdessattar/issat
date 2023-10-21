import { Card } from "antd";
import React, { useState} from 'react';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import axios from "axios";
//import axios from 'axios';
// Import the main component
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// 
import AdminParcours from "../components/AdminParcours";

const Parcours = () => {



const [uploadedFile, setUploadedFile] = useState('');
const [pdfFile, setPdfFile] = useState("");
const [pdfFileError, setPdfFileError] = useState('')


const [inputs, setInputs] = useState({
  session:"",
  semestre:"",
})

//on change file
const fileType=['application/pdf'];
const handlePdfFileChange =(e)=>{
  let selectedFile = e.target.files[0]
  if (selectedFile){
    if(selectedFile && fileType.includes(selectedFile.type)){
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = (e)=>{
        setPdfFile(e.target.result);
        console.log(e.target)
        setPdfFileError('');
      }
    }else{
      setPdfFile(null)
      setPdfFileError('Please Select Valid PDF File')
    }

  }else{
    console.log('select your file')
  }

}

const handleChange =(e)=>{
  setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  console.log(inputs);
}


const handleSubmit = async (e) => {
  e.preventDefault()
const formData = new FormData();
formData.append("file", pdfFile)
const result = await axios.post("/ajout/ajoutparcours", formData )
console.log(result)
  


 
};
const handleReset = async (e) => {
  e.preventDefault();
  setUploadedFile('');

}

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin/acceuil">Acceuil</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
              Parcours:
              </li>
            </ol>
          </nav>
        </div>
      </div>

    

      <div>
        <div className="mt-4">
          <h5 className="mb-4"> Ajouter un Nouveau Parcours:</h5>
          <Card>
            <Form className="row g-3 needs-validation"> 
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Groupe:</label>
                <Form.Select aria-label="Default select example" name="session">
                  <option></option>
                  <option value="principale" onChange={handleChange}>IOT</option>
                  <option value="principale" onChange={handleChange}>IRS</option>
                  <option value="principale" onChange={handleChange}>GLSI</option>
                  <option value="principale" onChange={handleChange}>TELECOM</option>
                  <option value="principale" onChange={handleChange}>EEA-AII</option>
                  <option value="principale" onChange={handleChange}>EEA-AT</option>
                  <option value="principale" onChange={handleChange}>EEA-EI</option>
                  <option value="principale" onChange={handleChange}>EEA-SE</option>
                </Form.Select>
              </div>
            </div>
           
           

           
              <Form.Group controlId="formFile">
                <Form.Label>
                  Selectionné un fichier sous format PDF à ajouté:
                </Form.Label>
                <Form.Control className="form-control" type="file" accept=".pdf" name='pdffile' required onChange={(e) => setPdfFile(e.target.file)} />
              </Form.Group>
              <Stack gap={2}>
                <Button  type="submit" onClick={handleSubmit} className='btn btn-submit btn-lg'>Ajouter</Button>
                <Button type="submit" onClick={handleReset} variant="secondary">retour</Button>
              </Stack>
            </Form>
            {uploadedFile && <label>uploadedFile: {uploadedFile}</label>}
            {pdfFileError && <div className="error-msg">{pdfFileError}</div> }

          </Card>
        </div>

      </div>
        
      <Card>
      <h5 className="mb-2"> Listes des Parcours:</h5>
        
      </Card>
      <Card>
        <AdminParcours/>
       
      </Card>
     
    </div>
  );
};

export default Parcours;
