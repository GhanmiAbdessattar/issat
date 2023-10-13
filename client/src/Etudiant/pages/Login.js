import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Alert, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import Validation from "../components/Validation";


const Login = () => {

  axios.defaults.withCredentials = true;
  const navigate = useNavigate('');

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  //const [LoginStatut, setLoginStatus] = useState(false)

  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState([]);


  const handleInput = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    //setErrors(Validation(inputs))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputs);
    
   try{
    const response = await axios.post("/auth/login", inputs);
    console.log(response.data.Message)
    if (response.data.Message === "Success") {
      console.log(response)
      const token = response.data.token
      const cin = response.data.cin
      const nom = response.data.nom
      const prenom = response.data.prenom
      const statut = response.data.statut
      alert('Login successful')
      navigate("/acceuil");
      localStorage.setItem('token', token)
      localStorage.setItem('cin', cin)
      localStorage.setItem('nom', nom)
      localStorage.setItem('prenom', prenom)
      localStorage.setItem('statut', statut)
      console.log(token)
      setMsg(response.data.Message)

    } else {
      console.log(response.data.Message)
      setMsg(response.data.Message)
      setErrors(Validation(inputs))
    }

   }catch(err){
    console.log(err)
   }
  }



  return (
    <div className="py-5" style={{ background: "#b9e7e7", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account</p>
        <Form action="POST"
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >

          <Form.Item name="email" rules={[
            {
            //  required: true,
              message: "Please input your Email!",
            },
          ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleInput}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}


          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
               // required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              autoComplete="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleInput}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          </Form.Item>

          <div>

            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Rester Connecté ?</Checkbox>
            </Form.Item>
            <Form.Item name="linklogin">
              <Link className="login-form-forgot" to="/forgotPassword">
                Mot de passe Oblié !!
              </Link>
            </Form.Item>
          </div>

          <Form.Item name="button">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-100"
              onClick={handleSubmit}
            >
              Log in
            </Button>
          </Form.Item>
          {msg && <Space direction="vertical" style={{ width: '100%' }}>
            <Alert message={msg} type="error" showIcon />
          </Space>}

          <br />
          <Form.Item name="check" valuePropName="check" noStyle>

            <label>vous n'avez pas un compte?</label>
          </Form.Item>
          <Form.Item name="link">
            <Link className="login-form-forgot" to="/register">
              Inscription!
            </Link>
          </Form.Item>
        </Form>
      </div>

    </div>
  );
};

export default Login;
