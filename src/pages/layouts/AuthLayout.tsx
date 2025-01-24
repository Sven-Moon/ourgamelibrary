import React from 'react';
import Page from 'src/components/Surfaces/page';

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-w-screen mx-auto">
      <Page id="login-page">
        <h1 className="text-4xl font-bold mb-4 m-8">
          Community Lending Library
        </h1>
        <div className="flex-grow h-1/3"></div>
        {children}
        <div className="flex-grow h-2/3"></div>
      </Page>
    </div>
  );
};

export default AuthLayout;
