import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Alert, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
//import Validation from "../components/Validation";


const Login = () => {

  axios.defaults.withCredentials = true;
  const navigate = useNavigate('');

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  //const [LoginStatut, setLoginStatus] = useState(false)

  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState("");


  const handleInput = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    //setErrors(Validation(inputs))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
 
    
   try{
    const response = await axios.post("/auth/login", inputs);
    if (response.data.Message === "Success") {
      const token = response.data.token
      const etudiantData = response.data.etudiant;
      console.log(etudiantData)
     // const cin = etudiantData.cin;
     // const role = etudiantData.role;
     // const email = etudiantData.email;
     const [id,cin, role] = etudiantData;

     
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      localStorage.setItem("cin", cin);
      localStorage.setItem("role", role);
      //localStorage.setItem("email", email);

      alert("Login successful");
      setMsg(response.data.Message)

      if (role === "etudiant") {
        navigate("/acceuil");
      } else if (role === "agent" || role === "admin") {
        navigate("/admin/acceuil"); // Modifier le chemin si nécessaire
      }
    } else {
      setMsg(response.data.Message);
      setErrors([]);
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
