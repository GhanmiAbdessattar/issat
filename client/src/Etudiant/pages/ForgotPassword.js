import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="py-5" style={{ background: "#b9e7e7", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h4 className="text-center">Réinitialiser votre mot de passe</h4>
        <p>Merci de saisie votre adresse email valide</p>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "votre email!",
              },
            ]}
          >
            <Input
              type="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-100"
            >
              Réinitialiser
            </Button>
            
          </Form.Item>
          <Form.Item>
           
              
              <Link className="login-form-forgot" to="/login">
              Retour
                  </Link>
           
            
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
