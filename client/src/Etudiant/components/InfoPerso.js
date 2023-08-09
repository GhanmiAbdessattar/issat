import React from "react";
import { Card, Descriptions } from "antd";

const InfoPerso = () => {
  return (
    <div>
      <Card>
        <Descriptions title="Informations Personnelles:">
          <Descriptions.Item label="Nom et Prénom">
            GHANMI ABDESSATAR
          </Descriptions.Item>
          <Descriptions.Item label="Numéro CIN">11350198</Descriptions.Item>
          <Descriptions.Item label="Num Inscription">
            1122334455
          </Descriptions.Item>
          <Descriptions.Item label="Diplôme">
            MP-EN-Réseaux et Télécommunication
          </Descriptions.Item>
          <Descriptions.Item label="Date de naissance">
            25/06/1993
          </Descriptions.Item>
          <Descriptions.Item label="Sexe">Masculin</Descriptions.Item>
          <Descriptions.Item label="Cycle">3</Descriptions.Item>
          <Descriptions.Item label="Niveau d'études">1</Descriptions.Item>
          <Descriptions.Item label="Spécialité">
            1 ère MP RT(Nouveaux)
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            ghanmiabdessattar1@gmail.com
          </Descriptions.Item>
          <Descriptions.Item label="Telephone">20480465</Descriptions.Item>
          <Descriptions.Item label="Année Universitaire">
            2022/2023
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default InfoPerso;
