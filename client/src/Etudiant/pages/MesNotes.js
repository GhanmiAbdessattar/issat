import React from "react";
import Semestre from "../components/Semestre";
import InfoPerso from "../components/InfoPerso";
import { Card } from "antd";
import { Link } from "react-router-dom";

const MesNotes = () => {
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
                Mes Notes
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Card>
        <div>
          <InfoPerso />
        </div>
      </Card>
      <Card>
        <div>
          <Semestre />
        </div>
      </Card>
    </div>
  );
};

export default MesNotes;
