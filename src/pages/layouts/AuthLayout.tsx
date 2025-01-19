import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Auth Page
        </Typography>
        {children}
      </Box>
    </Container>
  );
};

export default AuthLayout;