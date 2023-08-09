import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Module = () => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>N°</th>
            <th>Code_Ue</th>
            <th>Module</th>
            <th>Credit</th>
            <th>Coef</th>
            <th>Nat</th>
            <th>Rg</th>
            <th>Moy</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>573199130</td>
            <td>Systémes d'exploitation et architecture</td>
            <td>7</td>
            <td>3,5</td>
            <td>Fond</td>
            <td>MX</td>
            <td>12</td>
            <td>
              <Link to="/DetailModule">Detail</Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>573199140</td>
            <td>Logique et multimédia</td>
            <td>4</td>
            <td>3,5</td>
            <td>Fond</td>
            <td>MX</td>
            <td>10</td>
            <td>
              <Link to="/DetailModule">Detail</Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>573199120</td>
            <td>Algorithmique et programmation 1</td>
            <td>6</td>
            <td>3,5</td>
            <td>Fond</td>
            <td>MX</td>
            <td>8</td>
            <td>
              <Link to="/DetailModule">Detail</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Module;
