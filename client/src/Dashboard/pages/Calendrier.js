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
import axios from "axios";


const Calendrier = () => {



const [uploadedFile, setUploadedFile] = useState('');
const [pdfFile, setPdfFile] = useState(null);
const [pdfFileError, setPdfFileError] = useState('')

const acceptablefile = ["pdf", "PDF"];
const checkFile = (name) => {
  return acceptablefile.includes(name?.split(".").pop().toLowerCase());
}
const [inputs, setInputs] = useState({
  session:"",
  semestre:"",
})

//on change file


const handlFileChange =(e)=>{
  setPdfFile(e.target.files[0]);
  const datafile = e.target.files[0];
  if (!datafile) {
    console.log("merci de vérifier le fichier")
    setPdfFileError(datafile)
  }
}


const handleSubmit = async (e) => {
  e.preventDefault()
  const formData = new FormData();
  formData.append("pdfFile", pdfFile)
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  }

  if (!checkFile(pdfFile.name)) {
    setPdfFileError("Erreur lors de du l'upload du fichier, merci de verifier le fichier selectionnée")
  } else {
    await axios.post('/ajout/ajoutcalendrier', formData, config).then((response) => {
      setUploadedFile("Calendrier importé avec succès")
    }).catch((error) => {
      setPdfFileError(error)
      setUploadedFile("Erreur lors de du l'upload du fichier, merci de verifier le fichier selectionnée: ")
    });
  }

  }

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
                  <option value="principale" >Principale</option>
                  <option value="controle" >Controle</option>
                </Form.Select>
              </div>
            </div>
           
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Semestre:</label>
                <Form.Select aria-label="Default select example" name="semestre">
                  <option></option>
                  <option value="1" >Semestre 1</option>
                  <option value="2" >Semestre 2</option>
                </Form.Select>
              </div>
            </div>

           
              <Form.Group controlId="formFile">
                <Form.Label>
                  Selectionné une Calendrier des Examens sous format PDF à ajouté:
                </Form.Label>
                <Form.Control className="form-control" type="file" accept=".pdf" name='file' required onChange={handlFileChange} />
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
