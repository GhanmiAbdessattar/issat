import { Card, Col } from "antd";
import { Descriptions } from "antd";

const EtudiantConfirm = () => {
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
                      GHANMI ABDESSATAR
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Num Inscription">
                      123456
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="CIN">
                      11350198
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col >
                  <Descriptions>
                    <Descriptions.Item label="Email">
                      ghanmiabdessattar1@gmail.com
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Diplome">
                    MP-EN-Réseaux et Télécommunication
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Niveau">
                      1
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Spécialité">
                    1 ère MP RT(Nouveaux)
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Date Inscription">
                      25/09/2023
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
