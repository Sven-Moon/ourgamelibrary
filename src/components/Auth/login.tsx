import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import TextInput from ':forms/textInput';
import Card from ':cmp/Surfaces/card';
import Box from ':cmp/Surfaces/box';
import Label from ':forms/label';
import { default as CustomButton } from '../Forms/button';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log('Google Sign-In');
  };

  return (
    <Box id="loginBox">
      <Card className="w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-600 dark:text-white">Midtown Login</h2>
        <form onSubmit={handleLogin} className="space-y-4 flex flex-col items-center">
          <div>
            <Label id="username" text="Username:" />
            <TextInput
              id="username"
              value={username}
              required
              aria-label="Username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Label id="password" text="Password:" />
            <TextInput
              type="password"
              id="password"
              value={password}
              required
              aria-label="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <CustomButton className="w-full" fill="contained" type="submit" >
            Sign In
          </CustomButton>
        </form>
        <CustomButton className="w-full mt-4" fill="contained" onClick={handleGoogleSignIn} >
          Sign In with <span className='text-blue-600'>G</span ><span className='text-red-600'>o</span ><span className='text-yellow-600'>o</span ><span className='text-blue-600'>g</span ><span className='text-green-600'>l</span ><span className='text-red-600'>e</span >
        </CustomButton>
        <hr className="my-4" />
        <CustomButton className="w-full" fill="outlined" >
          Register
        </CustomButton>
      </Card>
    </Box>
  );
};

export default Login;