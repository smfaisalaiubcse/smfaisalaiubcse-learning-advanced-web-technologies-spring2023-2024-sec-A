"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { AuthContext } from "@/app/utils/Provider/authcontext";
import Link from "next/link";
import { FaAd, FaBullhorn, FaHome, FaList, FaUser, FaUsers } from "react-icons/fa";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const{user}=useContext(AuthContext);
  const [userData, setUserData] = useState('');
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
  // const loggedInUser = userData;
  // console.log(loggedInUser); // Assuming userData contains the logged-in user's data
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/login');
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <p>Hello {userData.firstname} {userData.lastname}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
