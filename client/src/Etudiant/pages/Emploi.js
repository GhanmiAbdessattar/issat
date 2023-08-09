import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Emploi = () => {
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
                Mes Emploi
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Card></Card>
    </div>
  );
};

export default Emploi;
