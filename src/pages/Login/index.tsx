import React from 'react';
import { LoginForm } from './components/LoginForm';
import { LoginLayout } from './components/LoginLayout';
import { LoginHeader } from './components/LoginHeader';
import { LoginFooter } from './components/LoginFooter';

const LoginPage: React.FC = () => {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
};

export default LoginPage;
