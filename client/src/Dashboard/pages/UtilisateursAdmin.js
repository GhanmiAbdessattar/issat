import React from "react";
import { Link } from "react-router-dom";
import User from "../components/User";

const UtilisateurAdmin = () => {
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
                List des utilisateurs:
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div>
          <div className="mt-4">
               <h4 className="mb-4"> Liste des utilisateurs:</h4>
               <User/>
           </div>
        
      </div>
     
    </div>
  );
};

export default UtilisateurAdmin;
