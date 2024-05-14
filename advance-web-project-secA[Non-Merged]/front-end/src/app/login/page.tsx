// login/page.tsx
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });
      const { access_token } = response.data;
      // Store the token in localStorage or cookies for future requests
      localStorage.setItem('accessToken', access_token);
      // Redirect to dashboard or any other page upon successful login
      // You can use Next.js router or navigate to do this
      // Example: router.push('/dashboard');
      router.push("/dashboard");
    } catch (error) {
      setError('Invalid username or password');
      // router.push('/dashboard');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <br></br>
      <br></br>
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <br></br>
      <br></br>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
