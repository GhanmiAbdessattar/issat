import { Card } from "antd";
import React from 'react';
import { Link } from "react-router-dom";
import ParcoursCard from "../components/ParcoursCard";



const ParcoursEtudiant = () => {




  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/acceuil">Acceuil</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Parcours:
              </li>
            </ol>
          </nav>
        </div>
      </div>
      

      <Card>
        <h5 className="mb-1"> Listes des Parcours:</h5>
      </Card>
      <Card>
        <ParcoursCard/>
      </Card>

    </div>
  );
};

export default ParcoursEtudiant;
