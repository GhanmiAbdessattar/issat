import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import DiversCard from "../components/DiversCard";

const Acceuil = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/acceuil/acceuil">Acceuil</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Acutalité
            </li>
          </ol>
        </nav>
      </div>
    </div>

 
    
    <Card>
    <h5 className="mb-2"> Acutalité:</h5>
    </Card>
    <Card>
    <h6 className="mb-2"> Dérnier Avis ajoutées:</h6>
      <DiversCard/>
    </Card>
    <Card>
    <h6 className="mb-2"> Dérnier documents ajoutées:</h6>
      <DiversCard/>
    </Card>
  </div>
);
};

export default Acceuil;
