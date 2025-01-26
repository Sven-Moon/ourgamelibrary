import React from 'react';
import Page from ':cmp/Surfaces/page';

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-w-screen mx-auto">
      <Page id="login-page">
        <h1 className="text-4xl font-bold mb-4 m-8 dark:text-gray-100">
          Community Exchange
        </h1>
        {children}
      </Page>
    </div>
  );
};

export default AuthLayout;
