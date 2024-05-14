// dashboard/page.tsx
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const DashboardPage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data from the backend
        const response = await axios.get('http://localhost:3000/all-users/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Send the access token with the request
          },
        });
        setUserData(response.data);
      } catch (error) {
        setError('You are logged out, please login again');
        router.push("/login");
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/login');
  };

  return (
    <div>
      <h1>Profile</h1>
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <p>ID: {userData.id}</p>
          <p>User Type: {userData.usertype}</p>
          <p>First Name: {userData.firstname}</p>
          <p>Last Name: {userData.lastname}</p>
          <p>Mobile: {userData.mobile}</p>
          <p>Email: {userData.email}</p>
          <p>Gender: {userData.gender}</p>
          <p>Username: {userData.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
