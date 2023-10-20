import { Card } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PhotoProfile from "../components/PhotoProfile";
import  { useState } from "react";
import axios from "axios";

const Profile = () => {

  const [etudiantData, setEtudiantData] = useState([]);

  useEffect(() => {
    // Récupérer le CIN du localStorage
    const cin = localStorage.getItem("userCIN");
    const role = localStorage.getItem("Role");
    console.log("userCin:",cin);
    console.log("role:",role);
    // Vérifier si le CIN est défini
    if (cin) {
      // Effectuer une requête GET vers le serveur pour obtenir les résultats de l'étudiant
      axios.get(`/getEtudiant/etudiant/${cin}`)
        .then((res) => {
          // Mettre à jour l'état avec les données de l'étudiant
          //console.log(res);
          console.log(res.data.etudiant);
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
                          //style={{ width: "50px;" }}
                        />
                        <h5 className="my-3">{etudiantData.nom_fr} {etudiantData.prenom_fr}</h5>
                        <p className="text-muted mb-1">
                        {etudiantData.specialite}
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
                            {etudiantData.nom_fr} {etudiantData.prenom_fr}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Numéro CIN</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{etudiantData.mat_cin}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Date de naissance</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{etudiantData.date_naissance}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Sexe</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{etudiantData.sexe}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Num Inscription</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{etudiantData.Num_inscription}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Diplôme</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                            {etudiantData.diplome}
                            </p>
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Mention</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{etudiantData.mention}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Niveau d'études</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{etudiantData.passeport}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Spécialité</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                            {etudiantData.specialite}
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
                            {etudiantData.Email}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Telephone</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{etudiantData.Telephone_Portable}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Addresse</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                            {etudiantData.Adresse_Francais}
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
