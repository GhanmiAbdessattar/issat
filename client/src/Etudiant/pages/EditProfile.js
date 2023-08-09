import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Card, Input, Space } from "antd";

import React from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/acceuil">Acceuil</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/profile">Mon Profile</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Modifier Mon Profile
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div>
        <Card>
          <form className="row g-3 needs-validation">
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Telephone</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Addresse</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="col-12 pt-2">
              <button className="btn btn-primary">Confirmer</button>
            </div>
          </form>
        </Card>
        <Card>
          <div>
            <div className="col-md-6 position-relative">
              <div className="card mb-4 mb-md-6">
                <div className="card-body">
                  <p className="mb-4">Parametre de Sécurité:</p>

                  <hr />
                  <div className="row">
                    <div className="col-sm-9">
                      <p className="mb-2">Mot de passe:</p>
                    </div>
                    <div className="row justify-content-md-center">
                      <Space className="col col-lg-12" direction="vertical">
                        <Input.Password
                          size="large"
                          placeholder=""
                          value={"123456"}
                          iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                        />
                        <Space className="col col-lg-12" direction="vertical">
                          <Input.Password
                            size="large"
                            placeholder="Nouveau Mot de passe"
                            iconRender={(visible) =>
                              visible ? (
                                <EyeTwoTone />
                              ) : (
                                <EyeInvisibleOutlined />
                              )
                            }
                          />
                          <Input.Password
                            className="col col-lg-12"
                            size="large"
                            placeholder="Repeter votre Mot de passe"
                            iconRender={(visible) =>
                              visible ? (
                                <EyeTwoTone />
                              ) : (
                                <EyeInvisibleOutlined />
                              )
                            }
                          />
                          <Button type="primary" block>
                            Modifier
                          </Button>
                        </Space>
                      </Space>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EditProfile;
