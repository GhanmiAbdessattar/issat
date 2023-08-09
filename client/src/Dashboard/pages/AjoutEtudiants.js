import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const AjoutEtudiants = () => {
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
                Ajout Etudiants
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <Card>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>
            Selectionné le fichier Excel contenant la liste des Etudiants à
            ajouté:
          </Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary">Ajouter</Button>
          <Button variant="outline-secondary">retour</Button>
        </Stack>
      </Card>
      <Card></Card>
    </div>
  );
};

export default AjoutEtudiants;
