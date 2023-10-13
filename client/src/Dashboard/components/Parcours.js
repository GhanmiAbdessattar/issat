import Table from "react-bootstrap/Table";
import React from "react";
import { Space } from "antd";
import { Button } from 'antd';

const Parcours = () => {

  return (
    <div>
      <Table responsive="xl">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Role</th>
            <th>Télephonne</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Harbaoui Roudayna</td>
            <td>Télécommunication</td>
            <td>Reseaux</td>
            <td>Harbaouiroudayna@gmail.com</td>
            <td>20480465</td>
            <td>
            <div className="d-flex">
              <Space wrap>
                   <Button   size={"small"}  >Modifier</Button>
                </Space>
                <Space wrap>
                   <Button danger size={"small"} >Supprimer</Button>
                </Space>

              </div>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>GHANMI ABDESSATAR</td>
            <td>Télécommunication</td>
            <td>Reseaux</td>
            <td>ghanmiabdessattar1@gmail.com</td>
            <td>20480465</td>
            <td>
            <div className="d-flex">
              <Space wrap>
                   <Button   size={"small"} >Modifier</Button>
                </Space>
                <Space wrap>
                   <Button danger size={"small"} >Supprimer</Button>
                </Space>

              </div>
            </td>
          
          </tr>
          <tr>
            <td>03</td>
            <td>Harbaoui Roudayna</td>
            <td>Télécommunication</td>
            <td>Reseaux</td>
            <td>Harbaouiroudayna@gmail.com</td>
            <td>20480465</td>
            <td>
            <div className="d-flex">
              <Space wrap>
                   <Button   size={"small"}  >Modifier</Button>
                </Space>
                <Space wrap>
                   <Button danger size={"small"} >Supprimer</Button>
                </Space>

              </div>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>GHANMI ABDESSATAR</td>
            <td>Electronique</td>
            <td>Electronique</td>
            <td>ghanmiabdessattar1@gmail.com</td>
            <td>20480465</td>
            <td>
            <div className="d-flex">
              <Space wrap>
                   <Button   size={"small"}  >Modifier</Button>
                </Space>
                <Space wrap>
                   <Button danger size={"small"} >Supprimer</Button>
                </Space>

              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Parcours;
