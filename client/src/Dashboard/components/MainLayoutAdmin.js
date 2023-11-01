import React from "react";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { AiOutlinePicRight, AiOutlinePicLeft, AiOutlineLogout } from "react-icons/ai";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, theme ,Button } from "antd";
import { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Acceuil", "Acceuil", <PieChartOutlined />),
  getItem("Actualité", "Actualite", <FileOutlined />),
  getItem("Resultat", "resultat", <UserOutlined />, [
    getItem("1er Année", "resultat-1er"),
    getItem("2 éme année", "resultat-2eme"),
    getItem("3 éme année", "resultat-3eme"),
  ]),
  
  getItem("Emploi de Temps", "emploi", <UserOutlined />, [
    getItem("1er Année", "Emploi_Premiere"),
    getItem("2 éme année", "Emploi_Deuxieme"),
    getItem("3 éme année", "Emploi_Troisieme"),
  ]),
  getItem("Enseignants", "enseignant", <TeamOutlined />, [
    getItem("Ajouter Enseignant", "AjoutEnseignant"),
    getItem("Liste des Enseignants", "ListEnseignants"),
  ]),
  getItem("Etudiants", "etudiant", <TeamOutlined />, [
    getItem("Ajouter Etudiant", "AjoutEtudiant"),
    getItem("Liste des Etudiants", "ListEtudiants"),
  ]),
  getItem("Utilisateurs", "users", <TeamOutlined />, [
    getItem("Ajouter Agent", "AjoutUsers"),
    getItem("Liste des Utilisateurs", "ListeUsers"),
  ]),
  getItem("Parcours", "Parcours", <FileOutlined />),
  getItem("Calendrier", "Calendrier", <FileOutlined />),
  getItem("Divers", "Divers", <FileOutlined />),
  getItem("Profile", "Profile", <UserOutlined />),
  getItem("Quitter", "quité", <AiOutlineLogout />),
];

const MainLayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Supprimer le token du stockage local
    localStorage.removeItem('token'); // Vous pouvez également utiliser sessionStorage

    // Rediriger l'utilisateur vers la page de connexion
    navigate('/login');
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <h4 className="text-white fs-5 text-center py-2 mb-0">
            <span className="sm-logo">ISSAT Mateur</span>
            <span className="lg-logo">Logitheque</span>
          </h4>
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={[""]}
          mode="inline"
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? AiOutlinePicRight : AiOutlinePicLeft,
            {
              className: "triger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <div className="d-flex gap-3 align-items-center">
            <div>
              <img
                width={32}
                height={32}
                src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                alt=""
              />
            </div>
            <div>
              <h5 className="mb-0">Admin</h5>
              <p className="mb-0">admin@gmail.com</p>
            </div>
            <div>
              <div>
              <Nav>
  <NavDropdown id="nav-dropdown-dark-example" title="" menuVariant="gary">
    <NavDropdown.Item>
      <Link to="/admin/Profile">Profile</Link>
    </NavDropdown.Item>
    <NavDropdown.Item>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </NavDropdown.Item>
  </NavDropdown>
</Nav>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            backgroundColor: colorBgContainer,
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ISSAT Mateur ©2023 Created by Ghanmi Abdessattar
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayoutAdmin;
