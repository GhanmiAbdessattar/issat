import { Card } from "antd";
import React, { useState} from 'react';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
//import axios from 'axios';
import EmploiCard from "../components/EmploiCard";


import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const Calendrier = () => {



const [uploadedFile, setUploadedFile] = useState('');
const [pdfFile, setPdfFile] = useState(null);
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
  if (pdfFile!==null){
    
  }else{
   

  }


 
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
              Calendrier des Examens:
              </li>
            </ol>
          </nav>
        </div>
      </div>

    

      <div>
        <div className="mt-4">
          <h5 className="mb-4"> Ajouter un Nouveau Calendrier:</h5>
          <Card>
            <Form className="row g-3 needs-validation"> 
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Session:</label>
                <Form.Select aria-label="Default select example" name="session">
                  <option></option>
                  <option value="principale" onChange={handleChange}>Principale</option>
                  <option value="controle" onChange={handleChange}>Controle</option>
                </Form.Select>
              </div>
            </div>
           
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Semestre:</label>
                <Form.Select aria-label="Default select example" name="semestre">
                  <option></option>
                  <option value="1" onChange={handleChange}>Semestre 1</option>
                  <option value="2" onChange={handleChange}>Semestre 2</option>
                </Form.Select>
              </div>
            </div>

           
              <Form.Group controlId="formFile">
                <Form.Label>
                  Selectionné une Calendrier des Examens sous format PDF à ajouté:
                </Form.Label>
                <Form.Control className="form-control" type="file" accept=".pdf" name='file' required onChange={handlePdfFileChange} />
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
      <h5 className="mb-4"> Listes des Calendriers des Examens:</h5>
        <EmploiCard/>
      </Card>
      <Card>
        <EmploiCard/>
      </Card>
     
    </div>
  );
};

export default Calendrier;
