import React from "react";
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";

const Semestre = () => {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Semestre</th>
            <th>Specialité</th>
            <th>Session</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Semestre 1</td>
            <td>SIL G-2</td>
            <td>Principale</td>
            <td>
              <Link to="DetailSemestre">Detail</Link>
            </td>
          </tr>
          <tr>
            <td>Semestre 2</td>
            <td>SIL G-2</td>
            <td>Principale</td>
            <td>
              <Link to="DetailSemestre">Detail</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Semestre;
