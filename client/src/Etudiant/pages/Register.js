import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";



const Register = () => {

  /*const [inputs, setInputs] = useState({
    cin:"",
    numinscription:"",
    username:"",
    password:"",
    confpassword:""
  })*/

  /*const navigate = useNavigate();*/


  /* const handelChange =(e)=>{
      setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  
    }
  
    */


  /* const handelSubmit = async e =>{
    e.preventDefault()
    try{
       await axios.post("/auth/register", inputs)
        navigate("/login")
    }catch(err) {
      setError(err.response.data);
    }    

  } */


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
                //  required: true,
                message: "votre CIN svp!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="votre CIN!"
              type="text"
              name="cin"
              id="cin"
              autoComplete="off"
              required
              aria-describedby="uidnote"

            />
          </Form.Item>
          <Form.Item
            htmlFor="inscription"
            rules={[
              {
                // required: true,
                message: "votre Num d'inscription svp!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="votre Num d'inscription!"
              type="text"
              name="inscription"
              id="inscription"
              autoComplete="off"
              required
            />
          </Form.Item>
          <Form.Item
            htmlFor="username">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="username"
              name="username"
              id="username"
              autoComplete="off"
              required
            />
          </Form.Item>
          <Form.Item
            htmlFor="password"
            rules={[
              {
                //  required: true,
                message: "Please enter your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="votre mot de passe"
              name="password"
              id="password"
              autoComplete="off"
              required
            />
          </Form.Item>

          <Form.Item
            htmlFor="matchpassword"
            rules={[
              {
                //  required: true,
                message: "Please confirm your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="confirmer votre mot de passe"
              name="matchpassword"
              id="matchpassword"
              autoComplete="off"
              required
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-100"
            >
              Inscription
            </Button>
          </Form.Item>

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
