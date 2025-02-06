
import React from 'react';
import LoginForm from '../component/LoginForm';
import { Link,useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../Authentication/firebase';
import { Typography, Layout } from 'antd';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const LoginPage = () => {
  const navigate = useNavigate(); 
  const login = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.alert("User Login SucessFully")
        navigate('/postready');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        window.alert("Register your Account")
        navigate('/register')
      });
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: 'black' }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: '#333', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
          <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>Login</Title>
          <LoginForm login={login} />
          <Paragraph style={{ textAlign: 'center' }}>
            Don't have an account? <Link to={'/register'} style={{ color: '#1890ff' }}>Register here</Link>
          </Paragraph>
        </div>
      </Content>
    </Layout>
  );
};

export default LoginPage;