import React from "react";
import InfoPerso from "../components/InfoPerso";

const Acceuil = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item active" aria-current="page">
                Acceuil
              </li>
              
            </ol>
          </nav>
        </div>
      </div>
      <InfoPerso />
    </div>
  );
};

export default Acceuil;
