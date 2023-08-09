import React, {useState} from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Alert, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange =(e)=>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))

  }
  console.log(inputs);

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
       await axios.post("/auth/login", inputs)
        navigate("/acceuil")
    }catch(err) {
      setError(err.response.data);
    }    

  }


  return (
    <div className="py-5" style={{ background: "#b9e7e7", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account</p>
        <Form action="POST" onSubmit={handleSubmit}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          
          <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    
               
                  />
          </Form.Item>
          <div className="error">
                
                  </div>
          <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
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
                      onChange={handleChange}
                    />
          </Form.Item>
          <div className="error">
                 
                  </div>
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
                    
          <Form.Item>
            <Button
             type="primary"
              htmlType="submit"
              className="login-form-button w-100"
              onClick={handleSubmit}
            >
              Log in
            </Button>
            </Form.Item>
            {err && <Space direction="vertical"style={{ width: '100%',}}>
                <Alert message={err} type="error" showIcon />
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
