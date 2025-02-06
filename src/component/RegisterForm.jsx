
import { Button, Checkbox, Form, Input } from 'antd';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const RegisterForm  = ({register}) => {
  
    return(
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
      onFinish={register}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input className='placeholder'   placeholder="Enter your username" style={{ width: '100%', height: '40px' }}  />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
         
        ]}
      >
        <Input className='placeholder'   placeholder="Enter your E-mail" style={{ width: '100%', height: '40px' }}  />
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
        <Input.Password className='placeholder'  placeholder="Enter your Password" style={{ width: '100%', height: '40px' }} />
      </Form.Item>
  
      
  
      <Form.Item label={null}>
        <Button  type='primary'  htmlType="submit">
         Register
        </Button>
      </Form.Item>
    </Form>
  )};
  export default RegisterForm;

     