import React, { useState } from 'react';
import { Alert, Card, Space } from "antd";
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



  const acceptablefile = ["pdf", "PDF"];
  const checkFile = (name) => {
    return acceptablefile.includes(name?.split(".").pop().toLowerCase());
  }

  const [uploadedFile, setUploadedFile] = useState('');
  const [pdfFile, setPdfFile] = useState('');
  const [pdfFileError, setPdfFileError] = useState('')


  const [selectedValue, setSelectedValue] = useState('')

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value)
    console.log(selectedValue)
  }

  //on change file

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
    const datafile = e.target.files[0];
    if (!datafile) {
      console.log("merci de vérifier le fichier")
      setPdfFileError(datafile)
    }
  }

  //const fileType=['application/pdf'];
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
      console.log("invalid file type")
      setPdfFileError("Erreur lors de du l'upload du fichier, merci de verifier le fichier selectionnée")
    } else {
      await axios.post('/ajout/ajoutparcours', formData, config ).then((response) => {
        setUploadedFile("Fichier importé avec succès")
        console.log(response.data)
      }).catch((error) => {
        setPdfFileError(error)
        setUploadedFile("Erreur lors de du l'upload du fichier, merci de verifier le fichier selectionnée: ")
      });
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
            <Form >
              <div >
                <div className="form-outline">
                {pdfFileError && <Space direction="vertical" style={{ width: '100%', }}>
                    <Alert message={pdfFileError} type="error" showIcon />
                  </Space>}

                  {uploadedFile && <Space direction="vertical" style={{ width: '100%', }}>
                    <Alert message={uploadedFile} type="success" showIcon />
                  </Space>}
                  <label className="form-label">Groupe:</label>
                  <Form.Select className="mb-4" aria-label="Default select example" name="session" value={selectedValue} onChange={handleSelectChange}>
                        <option value="IRS">IRS</option>
                        <option value="TELECOM">TELECOM</option>
                        <option value="GLSI">GLSI</option>
                        <option value="EEA-AII">EEA-AII</option>
                        <option value="EEA-AT">EEA-AT</option>
                        <option value="EEA-EI">EEA-EI</option>
                        <option value="EEA-SE">EEA-SE</option>
                  </Form.Select>
                </div>
              </div>
              <Form.Group className="mb-5" controlId="formFile">
                <Form.Label>
                  Selectionné un fichier sous format PDF à ajouté:
                </Form.Label>
                <br/>
                <Form.Control  className="form-control" type="file" accept=".pdf" name='pdfFile' required onChange={handleFileChange} />
              </Form.Group>

                <Stack gap={2} className="col-md-5 mx-auto">
                      <Button type="submit"  onClick={handleSubmit} variant="primary">Ajouter</Button>
                      <Button type="submit" onClick={handleReset} variant="secondary">retour</Button>
                </Stack>
            </Form>

          </Card>
        </div>

      </div>

      <Card>
        <h5 className="mb-2"> Listes des Parcours:</h5>

      </Card>
      <Card>
        <AdminParcours />

      </Card>

    </div>
  );
};

export default Parcours;
