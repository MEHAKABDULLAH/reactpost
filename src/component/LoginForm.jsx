import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import '../App.css';




const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const LoginForm = ({login}) => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={login}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item style={{color: '#333' }}
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input className='placeholder' placeholder="Enter your E-mail" style={{ width: '100%' , color:'black' }} />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password className='placeholder' placeholder="Enter your Password" style={{ width: '100%', height: '50px',color:'black' }} />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button  htmlType="submit " className='blue'> 
        Login
      </Button>
    </Form.Item>
  </Form>
);
export default LoginForm ;