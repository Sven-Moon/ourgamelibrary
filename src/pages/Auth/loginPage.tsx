import React from 'react';
import AuthLayout from '../layouts/authLayout';
import Login from 'src/components/Auth/login';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;