import { Card } from "antd";
import React from 'react';
import { Link } from "react-router-dom";
import DiversCard from "../components/DiversCard";



const DiversEtudiant = () => {




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
                Divers Documents:
              </li>
            </ol>
          </nav>
        </div>
      </div>
      

      <Card>
        <h5 className="mb-1"> Divers documents Administratif:</h5>
      </Card>
      <Card>
        <DiversCard/>
      </Card>

    </div>
  );
};

export default DiversEtudiant;
