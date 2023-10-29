import { Alert, Card, Space } from "antd";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import InputGroup from 'react-bootstrap/InputGroup';

//import axios from 'axios';
import EmploiCard from "../components/EmploiCard";
import axios from "axios";
// Import the main component


const EmploiPremiere = () => {

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
      await axios.post('/ajout/ajoutemploi', formData, config).then((response) => {
        setUploadedFile("Emploi importé avec succès")
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
                List des Emplois Premiére Année:
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div>
        <div className="mt-0">
          <h5 className="mb-2"> Ajouter un Nouveau Emploi pour les groupes 1ér Année:</h5>
          {pdfFileError && <Space direction="vertical" style={{ width: '100%', }}>
            <Alert message={pdfFileError} type="error" showIcon />
          </Space>}

          {uploadedFile && <Space direction="vertical" style={{ width: '100%', }}>
            <Alert message={uploadedFile} type="success" showIcon />
          </Space>}
          <Card>
            <Form encType="multipart/form-data">
              <div className="col-md-4 position-relative">
                <div className="form-outline">
                  <br />
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default" >
                      Parcours
                    </InputGroup.Text>
                    <Form.Control onChange={handleSelectChange}
                      aria-label="parcours"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default" onChange={handleSelectChange}>
                      Groupe
                    </InputGroup.Text>
                    <Form.Control onChange={handleSelectChange}
                      aria-label="groupe"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default" onChange={handleSelectChange}>
                      Semestre
                    </InputGroup.Text>
                    <Form.Control onChange={handleSelectChange}
                      aria-label="semestre"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                
                </div>
              </div>
             
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>
                  Selectionné l'emploi du Premiére Année sous format PDF à ajouté:
                </Form.Label>
                <Form.Control className="form-control" type="file" accept=".pdf" name='file' required onChange={handleFileChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formFile">
              </Form.Group>

              <Stack gap={2} className="col-md-5 mx-auto">
                <Button type="submit" onClick={handleSubmit} variant="primary">Ajouter</Button>
                <Button type="submit" onClick={handleReset} variant="secondary">retour</Button>
              </Stack>
            </Form>
          </Card>
        </div>

      </div>

      <Card>
        <h5 className="mb-4"> Listes des Emplois pour les groupes 1ér Année:</h5>
        <EmploiCard />
      </Card>


    </div>
  );
};

export default EmploiPremiere;
