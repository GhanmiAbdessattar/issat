import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const Acceuil = () => {
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
              Acutalité
            </li>
          </ol>
        </nav>
      </div>
    </div>

 
    
    <Card>
    <h5 className="mb-2"> Acutalité:</h5>
    </Card>
  </div>
);
};

export default Acceuil;
