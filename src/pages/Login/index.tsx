
import React from 'react';
import { LoginForm } from './components/LoginForm';
import { LoginLayout } from './components/LoginLayout';

const LoginPage: React.FC = () => {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
};

export default LoginPage;
