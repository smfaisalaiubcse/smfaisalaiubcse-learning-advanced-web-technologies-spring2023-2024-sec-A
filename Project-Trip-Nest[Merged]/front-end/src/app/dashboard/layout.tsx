"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import "../globals.css"; // Assuming this is where your Tailwind CSS is imported

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
    <div className="flex bg-gray-100">
      <div className="w-64 bg-blue-600 text-white p-4 space-y-4"> {/* Added Tailwind CSS classes */}
        {error && <p>{error}</p>}
        {userData && (
          <div>
            <p className="font-bold">Hello, {userData.firstname} {userData.lastname}</p>
          </div>
        )}
        {
          userData.usertype === "admin" && (
            <nav>
              <ul>
                <li>
                  <Link href="/dashboard/view-all-users">View All Users</Link>
                </li>
                <li>
                  <Link href="/dashboard/update-user">Update User</Link>
                </li>
                <li>
                  <Link href="/dashboard/add-admin">Add Admin</Link>
                </li>
                <li>
                  <Link href="/dashboard/delete-user">Delete User</Link>
                </li>
                <li>
                  <Link href="/dashboard/Faq/addfaq">Add FAQ</Link>
                </li>
                <li>
                  <Link href="/dashboard/profile">Profile</Link>
                </li>
                <li>
                  <Link href="/dashboard/about">About</Link>
                </li>
              </ul>
            </nav>
          )
        }
        {
          userData.usertype === "agency" && (
            <nav>
              <ul className="space-y-2 divide-y divide-gray-300">
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/add-hotel">Add Hotel</Link>
                </li>
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/add-room">Add Room</Link>
                </li>
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/add-flight">Add Flight</Link>
                </li>
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/add-vehicle">Add Vehicle</Link>
                </li>
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/view-added-rooms">view Added Rooms</Link>
                </li>
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/view-added-flights">view Added Flights</Link>
                </li>
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/view-added-vehicles">view Added Vehicles</Link>
                </li>
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/add-post">Add Post</Link>
                </li>
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/profile">Profile</Link>
                </li>
                <li>
                  <Link href="/dashboard/Faq/showfaq">Show FAQ</Link>
                </li>
                <li>
                  <Link href="/dashboard/about">About</Link>
                </li>
              </ul>
            </nav>
          )
        }
        {
          userData.usertype === "user" && (
            <nav>
              <ul className="space-y-2 divide-y divide-gray-300">
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/profile">Profile</Link>
                </li>
                <li>
                  <Link className="hover:text-blue-100" href="/dashboard/Booking">Booking</Link>
                </li>
                <li>
                  <Link href="/dashboard/deposit-money">Deposit Money</Link>
                </li>
                <li>
                  <Link href="/dashboard/Faq/showfaq">Show FAQ</Link>
                </li>
                <li>
                  <Link href="/dashboard/about">About</Link>
                </li>
              </ul>
            </nav>
          )
        }

        <button onClick={handleLogout} className="bg-white text-red-500 mt-4 px-4 py-2 rounded-md">Logout</button> {/* Added Tailwind CSS classes */}
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}