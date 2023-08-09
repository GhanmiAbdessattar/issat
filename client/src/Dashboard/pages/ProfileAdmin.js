import { Card, Input, Space } from "antd";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";
import { Link } from "react-router-dom";
import PhotoProfile from "../../Etudiant/components/PhotoProfile";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const ProfileAdmin = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin/acceuil">Acceuil</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Mon Profile
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <Card>
          <div>
            <section style={{ backgroundcolor: "#eee" }}>
              <div className="container py-5">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card mb-4">
                      <div className="card-body text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                          alt="avatar"
                          className="rounded-circle img-fluid"
                        />
                        <h5 className="my-3">Ghanmi Abdessattar</h5>
                        <p className="text-muted mb-1">Administrateur</p>
                        <hr />
                        <div>
                          <PhotoProfile />
                          <button
                            type="button"
                            className="btn btn-outline-primary ms-1"
                          >
                            Modifier votre photo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Nom et Prénom</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              Ghanmi Abdessattar
                            </p>
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              ghanmiabdessattar1@gmail.com
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Telephone</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">20480465</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Role</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">Administrateur</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-9">
                        <div className="card mb-4 mb-md-0">
                          <div className="card-body">
                            <p className="mb-4">Parametre de Sécurité:</p>

                            <hr />
                            <div className="row">
                              <div className="col-sm-3">
                                <p className="mb-0">Email:</p>
                              </div>
                              <div className="col-sm-9">
                                <p className="text-muted mb-0">
                                  ghanmiabdessattar1@gmail.com
                                </p>
                              </div>
                              <br />
                              <br />
                              <div>
                                <InputGroup>
                                  <Form.Control
                                    placeholder="Nouveau Email"
                                    aria-label="Nouveau Email"
                                  />
                                  <Button type="primary">
                                    Modifier
                                  </Button>
                                </InputGroup>
                              </div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-sm-6">
                                <p className="mb-2">Mot de passe:</p>
                              </div>
                              <div>
                                <Space
                                  className="col col-lg-12"
                                  direction="vertical"
                                >
                                  <Input.Password
                                    size="large"
                                    placeholder=""
                                    value={"123456"}
                                    iconRender={(visible) =>
                                      visible ? (
                                        <EyeTwoTone />
                                      ) : (
                                        <EyeInvisibleOutlined />
                                      )
                                    }
                                  />
                                  <Space
                                    className="col col-lg-12"
                                    direction="vertical"
                                  >
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
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileAdmin;
