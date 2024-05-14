// view-added-vehicles/page.tsx
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ViewAddedVehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        // Fetch vehicles data from the backend
        const response = await axios.get('http://localhost:3000/agency/vehicle', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Send the access token with the request
          },
        });
        setVehicles(response.data);
      } catch (error) {
        setError('Failed to fetch vehicles data');
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div>
      <h1>Added Vehicles</h1>
      {error && <p>{error}</p>}
      {vehicles.length > 0 ? (
        <div>
          {vehicles.map(vehicle => (
            <div key={vehicle.id}>
              <p>ID: {vehicle.id}</p>
              <p>Make: {vehicle.make}</p>
              <p>Model: {vehicle.model}</p>
              <p>Year: {vehicle.year}</p>
              <p>Type: {vehicle.type}</p>
              <p>Price Per Day: {vehicle.pricePerDay}</p>
              <p>Username: {vehicle.username}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No vehicles added yet</p>
      )}
    </div>
  );
};

export default ViewAddedVehiclesPage;
