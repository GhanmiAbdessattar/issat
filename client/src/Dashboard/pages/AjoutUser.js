import { Alert, Card, Input, Space } from "antd";
import React, { useState} from 'react';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import User from "../components/User";


const AjoutUser = () => {

  const [inputs, setInputs] = useState({
    nom:"",
    prenom:"",
    email:"",
    role:"",
    telephonne:"",
    password:""
  
  })
  const [err, setError] = useState(null);

  

  

  const handleChange =(e)=>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    console.log(inputs);
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
   }catch(err) {
     setError(err.response.data);
   } 

  }

  const handleReset = async (e) => {
    e.preventDefault();
    setInputs('');

  }

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
                Ajout Utilisateur:
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <Card>
        
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>
            Pour ajouter un utilisateur, merci de remplire ce formulaire:
          </Form.Label>

          <Card>
          <form className="row g-3 needs-validation">
          <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Nom:</label>
                <input type="text" name="nom" className="form-control" onChange={handleChange}/>
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Prénom:</label>
                <input type="text" name="prenom" className="form-control" onChange={handleChange} />
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" onChange={handleChange} />
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Role Utilisateur:</label>
                <Form.Select aria-label="Default select example" name="role">
                  <option></option>
                  <option value="Administrateur" onChange={handleChange}>Administrateur</option>
                  <option value="Agent Administratif" onChange={handleChange}>Agent Administratif</option>
                  <option value="Simple Utilisateur" onChange={handleChange}>Simple Utilisateur</option>
                </Form.Select>
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <div className="form-outline">
                <label className="form-label">Telephonne</label>
                <input type="text" name="telephonne" className="form-control" onChange={handleChange} />
              </div>
            </div>
            
            <div className="col-md-4 position-relative">
              <div className="form-outline">
              <label className="form-label">Mot de Passe:</label>
              <Space className="col-md-12 position-relative" direction="vertical">
                          <Input.Password
                            onChange={handleChange}
                            name="password"
                            autoComplete='false'
                            size="large"
                            placeholder="Nouveau Mot de passe"
                            iconRender={(visible) => visible ? (<EyeTwoTone /> ) : (<EyeInvisibleOutlined />)}
                          />
               </Space>
              </div>
            </div>
          </form>
        </Card>
        </Form.Group>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button type="primary" className="login-form-button w-100" onClick={handleSubmit}>Ajouter</Button>
          <Button type="reset"  variant="secondary" onClick={handleReset}>retour</Button>
        </Stack>
        
        {err && <Space direction="vertical"style={{ width: '100%',}}>
                <Alert message={err} type="error" showIcon />
            </Space>}
      </Card>
      <Card>
      <div className="mt-4">
               <h4 className="mb-4"> Liste des Utilisateurs:</h4>
               <User/>
      </div>

      </Card>
      
    </div>
  );
};

export default AjoutUser;
