import React from "react";
import { Link } from "react-router-dom";
import EtudiantListAttente from "../components/EtudiantListAttente";
import Etudiant from "../components/Etudiant";

const ListEtudiant = () => {
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
                List Etudiants
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div>
          <div className="mt-4">
               <h4 className="mb-4"> Liste des Etudiants en attente confirmation:</h4>
               <EtudiantListAttente />
           </div>
        
      </div>
      <div>
      <div className="mt-4">
               <h4 className="mb-4"> Liste des Etudiants:</h4>
               <Etudiant />
           </div>
      </div>
    </div>
  );
};

export default ListEtudiant;
