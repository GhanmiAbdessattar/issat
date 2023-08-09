import { Card, Col } from "antd";
import { Descriptions } from "antd";

const AdminDetail = () => {
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
                
                <Col >
                  <Descriptions>
                    <Descriptions.Item label="Email">
                      ghanmiabdessattar1@gmail.com
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col>
                  <Descriptions>
                    <Descriptions.Item label="Role">
                      Administrateur
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

export default AdminDetail;
