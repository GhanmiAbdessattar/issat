import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";

const ResetPassword = () => {
  return (
    <div className="py-5" style={{ background: "#b9e7e7", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h4 className="text-center">Réinitialiser votre mot de passe</h4>
        <p>Merci de saisie votre nouveau mot de passe</p>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "votre nouveau mot de passe!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="votre nouveau mot de passe!"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "confirmer votre nouveau mot de passe!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="confirmer votre nouveau mot de passe!"
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
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
