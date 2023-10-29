import { Card, Col, Descriptions } from 'antd';
import React, { useEffect, useState } from 'react'

const EtudiantDetail = ({cin}) => {

    const [etudiantDetail, setEtudiantDetail] = useState([]);
    useEffect(() => {
      fetch(`/getEtudiant/etudiant/${cin}`)
        .then((response) => response.json())
        .then((data) => {
  
          if (data.etudiantDetail) {
  
            setEtudiantDetail(data.etudiantDetail);
          } else {
            console.error('Invalid data format: "EtudiantPassif" array not found or not an array.');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
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

            {etudiantDetail.map((etudiants, index) => (
            <Descriptions key={etudiants.id} >

              <Col >
                <Descriptions>
                  <Descriptions.Item label="Nom et Prénom">
                  {etudiants.nom_fr }
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col>
                <Descriptions>
                  <Descriptions.Item label="Num Inscription">
                  {etudiants.nom_fr }
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col>
                <Descriptions>
                  <Descriptions.Item label="CIN">
                  {etudiants.nom_fr }
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col >
                <Descriptions>
                  <Descriptions.Item label="Email">
                  {etudiants.nom_fr }
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col>
                <Descriptions>
                  <Descriptions.Item label="Diplome">
                  {etudiants.nom_fr }
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col>
                <Descriptions>
                  <Descriptions.Item label="Niveau">
                  {etudiants.nom_fr }
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col>
                <Descriptions>
                  <Descriptions.Item label="Spécialité">
                  {etudiants.nom_fr }
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col>
                <Descriptions>
                  <Descriptions.Item label="Date Inscription">
                  {etudiants.nom_fr }
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Descriptions>
              ))}
          </div>
        </div>
      </Card>
    </div>
  </div>
);

}

export default EtudiantDetail