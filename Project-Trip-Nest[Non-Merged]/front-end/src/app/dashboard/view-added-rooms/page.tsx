// view-added-rooms/page.tsx
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ViewAddedRoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // Fetch rooms data from the backend
        const response = await axios.get('http://localhost:3000/agency/room', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Send the access token with the request
          },
        });
        setRooms(response.data);
      } catch (error) {
        setError('Failed to fetch rooms data');
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Added Rooms</h1>
      {error && <p>{error}</p>}
      {rooms.length > 0 ? (
        <div>
          {rooms.map(room => (
            <div key={room.id}>
              <p>ID: {room.id}</p>
              <p>Name: {room.name}</p>
              <p>Description: {room.description}</p>
              <p>Capacity: {room.capacity}</p>
              <p>Price Per Night: {room.pricePerNight}</p>
              <p>Username: {room.username}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No rooms added yet</p>
      )}
    </div>
  );
};

export default ViewAddedRoomsPage;
