import React, { useEffect, useState } from 'react';
import { Card, Col } from "antd";
import { Descriptions } from "antd";
import axios from 'axios';

const EtudiantConfirm = () => {
  const [etudiantData, setEtudiantData] = useState([]);

  useEffect(() => {
    // Récupérer le CIN du localStorage
    const cin = localStorage.getItem("userCIN");
  
 
    // Vérifier si le CIN est défini
    if (cin) {
      // Effectuer une requête GET vers le serveur pour obtenir les résultats de l'étudiant
      axios.get(`/getEtudiant/etudiant/${cin}`)
        .then((res) => {
          // Mettre à jour l'état avec les données de l'étudiant
          const Etudiant = res.data.etudiant;
          setEtudiantData(Etudiant);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données de l'étudiant :", error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="container">
         <Card>
         <div className="row">
            
            <div className="col-md-12">
            <Descriptions title="Information Personnelles">
            <Col >
                  <Descriptions.Item label="">
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        width="100px"
                      />
                    </div>
                  </Descriptions.Item>
                  
                </Col>
                </Descriptions>
              <Descriptions >
              
                <Col >
                  <Descriptions>
                    <Descriptions.Item label="Nom et Prénom">
                     {etudiantData.nom_fr} {etudiantData.prenom_fr}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Num Inscription">
                    {etudiantData.Num_inscription}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="CIN">
                    {etudiantData.mat_cin}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col >
                  <Descriptions>
                    <Descriptions.Item label="Email">
                    {etudiantData.Email}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Diplome">
                    {etudiantData.mention}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Niveau">
                    {etudiantData.passport}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Spécialité">
                    {etudiantData.specialite}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Date Inscription">
                    {etudiantData.date_inscrit}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Descriptions>
            </div>
          </div>
         </Card>
        </div>
    </div>
  );
};

export default EtudiantConfirm;
