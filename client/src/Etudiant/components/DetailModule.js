import { Card } from "antd";
import React from "react";
import Moyenne from "./Moyenne";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetailModule = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/acceuil">Acceuil</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/mesnotes">Mes Notes</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/DetailSemestre">Module</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Matiére
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <Card>
          <Moyenne />
        </Card>
        <Card>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>N°</th>
                <th>Matiére</th>
                <th>Examen</th>
                <th>DS</th>
                <th>TP</th>
                <th>Autre Note</th>
                <th>Moyenne</th>
                <th>Crédit</th>
                <th>Dispense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>système d'exploitation 1</td>
                <td>12</td>
                <td>7</td>
                <td>15</td>
                <td>-</td>
                <td>13</td>
                <td>3</td>
                <td>-</td>
              </tr>
              <tr>
                <td>2</td>
                <td>systèmes logiques et architecture des ordinateurs</td>
                <td>13,5</td>
                <td>7</td>
                <td>17</td>
                <td>-</td>
                <td>15</td>
                <td>3</td>
                <td>-</td>
              </tr>
              <tr>
                <td>3</td>
                <td>technologies multimédias</td>
                <td>7</td>
                <td>5</td>
                <td>9</td>
                <td>-</td>
                <td>9</td>
                <td>0</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default DetailModule;
