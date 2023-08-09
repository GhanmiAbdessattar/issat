import React from "react";
import { Link } from "react-router-dom";
import Enseignant from "../components/Enseignant";

const ListEnseignant = () => {
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
                List Enseignant
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div>
          <div className="mt-4">
               <h4 className="mb-4"> Liste des Enseignants:</h4>
               <Enseignant/>
           </div>
        
      </div>
     
    </div>
  );
};

export default ListEnseignant;
