import { Alert, Button, Card, Space } from "antd";
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import EmploiCard from "../../Dashboard/components/EmploiCard";
import Stack from "react-bootstrap/esm/Stack";
//import axios from 'axios';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
const Emploi = () => {


  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [uploadedFile, setUploadedFile] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState('')

  //for view pdf file:
  const [viewPdf, setViewPdf]= useState(null)

  const [inputs, setInputs] = useState({
    nom:"",
    prenom:"",
    email:"",
    role:"",
    telephonne:"",
    password:""
  
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
  



  //const acceptablefile = ["pdf"];
  //const checkFile = (name) => {
   // return acceptablefile.includes(name?.split(".").pop().toLowerCase());
  //}



  const handleSubmit = async (e) => {
    e.preventDefault()
    if (pdfFile!==null){
      setViewPdf(pdfFile);
    }else{
      setViewPdf(null)

    }


   
  };
 


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/acceuil">Acceuil</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Mes Emploi
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Card>

      <div>
        <div className="mt-4">
          <h5 className="mb-4"> Ajouter un Nouveau Emploi pour les groupes 1ér Année:</h5>
          <Card>
            <Form className="row g-3 needs-validation"> 
            
         
           
              <Form.Group controlId="formFile">
                <Form.Label>
                  Selectionné l'emploi du Premiére Année sous format PDF à ajouté:
              
                </Form.Label>
                <Form.Control className="form-control" type="file" accept=".pdf" name='file' required onChange={handlePdfFileChange} />
              </Form.Group>
              <Stack gap={2}>
                <Button  type="submit" onClick={handleSubmit} className='btn btn-submit btn-lg'>Ajouter</Button>
              </Stack>
            </Form>
           
          </Card>
        </div>

      </div>
     
    

      </Card>
    </div>
  );
};

export default Emploi;
