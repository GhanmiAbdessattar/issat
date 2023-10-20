import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Space, Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../components/Validation";
import axios from 'axios';


const Register = () => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    cin: "",
    numinscription: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState("");


  const handleInput = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    

  }
  const handelValidation = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post("/auth/register/", inputs);
     
      if (response.data.Message === "User ajouter avec Success") {
        
        alert('register successful')
        navigate('/login')
        setMsg(response.data.Message)
      } else {
       
        setMsg(response.data.Message)
        setErrors(Validation(inputs))
        setErrors([]);
      }
     }catch(err){
      console.log(err)
     }

  
    //            {errors.cin && <p style={{ color: "red" }}>{errors.cin}</p>}

  }
  return (
    <div className="py-5" style={{ background: "#b9e7e7", minHeight: "100vh" }}>

      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Inscription</h3>
        <p className="text-center">S'inscrire sur la plateforme </p>

        <Form action="POST"
          name="register"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            htmlFor="cin"
            rules={[
              {
                required: true,
                message: "votre CIN svp!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="votre CIN!"
              //type="text"
              name="cin"
              id="cin"
              //autoComplete="off"
              onChange={handleInput}
            />
            {errors.cin && <p style={{ color: "red" }}>{errors.cin}</p>}
          </Form.Item>
         

          <Form.Item
            htmlFor="inscription"
            rules={[
              {
                required: true,
                message: "votre Num d'inscription svp!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="votre Num d'inscription!"
              //type="text"
              name="numinscription"
              id="numinscription"
              //autoComplete="off"
              onChange={handleInput}
            />
                        {errors.numinscription && <p style={{ color: "red" }}>{errors.numinscription}</p>}

          </Form.Item>

          <Form.Item
            htmlFor="email">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              name="email"
              id="email"
              //autoComplete="off"
              onChange={handleInput}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          </Form.Item>
          <Form.Item
            htmlFor="password"
            rules={[
              {
                required: true,
                message: "Please enter your Password!",
              },
            ]}
          >


            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="votre mot de passe"

              name="password"
              id="password"
              autoComplete="off"
              onChange={handleInput} />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-100"
              onClick={handelValidation}

            >
              Inscription

            </Button>


          </Form.Item>

          {msg && <Space direction="vertical" style={{ width: '100%' }}>
            <Alert message={msg} type="error" showIcon />
          </Space>}



          <Form.Item name="remember" valuePropName="checked" noStyle>
            <label>vous avez déjà un compte?</label>
          </Form.Item>
          <Form.Item>
            <Link className="login-form-forgot" to="/login">
              Se Connecter!
            </Link>
          </Form.Item>

        </Form>

      </div>
    </div>
  );
};

export default Register;
