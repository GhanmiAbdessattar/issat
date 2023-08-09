import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PhotoProfile from "../components/PhotoProfile";

const Profile = () => {
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
                  <Link to="/acceuil">Acceuil</Link>
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
                          style={{ width: "50px;" }}
                        />
                        <h5 className="my-3">Ghanmi Abdessattar</h5>
                        <p className="text-muted mb-1">
                          MP-EN-Réseaux et Télécommunication
                        </p>
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
                            <p className="mb-0">Numéro CIN</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">11350198</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Date de naissance</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">25/06/1993</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Sexe</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">Masculin</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Num Inscription</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">1122334455</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Diplôme</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              MP-EN-Réseaux et Télécommunication
                            </p>
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Cycle</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">3</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Niveau d'études</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">1</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Spécialité</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              1 ère MP RT(Nouveaux)
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
                            <p className="mb-0">Addresse</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              Mateur 7030 Bizerte
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Année Universitaire</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">2022-2023</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mb-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary ms-1"
                      >
                        <Link to="/EditProfile">Modifier</Link>
                      </button>
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

export default Profile;
