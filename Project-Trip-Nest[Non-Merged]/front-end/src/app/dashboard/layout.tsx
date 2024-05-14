"use client"
import { Inter } from "next/font/google";
import "../globals.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userData, setUserData] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/all-users/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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
    <div className="flex">
      <div className="w-64 bg-red-500 text-white">
        {error && <p>{error}</p>}
        {userData && (
          <div>
            <p>Hello {userData.firstname} {userData.lastname}</p>
          </div>
        )}
        <nav>
          <ul>
            <li>
              <Link href="/dashboard/add-room">Add Room</Link>
            </li>
            <li>
              <Link href="/dashboard/add-flight">Add Flight</Link>
            </li>
            <li>
              <Link href="/dashboard/add-vehicle">Add Vehicle</Link>
            </li>
            <li>
              <Link href="/dashboard/view-added-rooms">view Added Rooms</Link>
            </li>
            <li>
              <Link href="/dashboard/view-added-flights">view Added Flights</Link>
            </li>
            <li>
              <Link href="/dashboard/view-added-vehicles">view Added Vehicles</Link>
            </li>
            <li>
              <Link href="/dashboard/add-post">Add Post</Link>
            </li>
            <li>
              <Link href="/dashboard/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
