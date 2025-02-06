
import React from 'react';
import RegisterForm from '../component/RegisterForm';
import { Link } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../Authentication/firebase';
import { Typography, Layout } from 'antd';
import { Link,useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const RegisterPage = () => {
   const navigate = useNavigate(); 
  const register = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
       window.alert("yor account has been registered sucessfully")
       useNavigate('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: 'black' }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: '#333', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
          <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>Register</Title>
          <RegisterForm register={register} />
          <Paragraph style={{ textAlign: 'center' }}>
            Already have an account? <Link to={'/'} style={{ color: '#1890ff' }}>LOGIN</Link>
          </Paragraph>
        </div>
      </Content>
    </Layout>
  );
};

export default RegisterPage;