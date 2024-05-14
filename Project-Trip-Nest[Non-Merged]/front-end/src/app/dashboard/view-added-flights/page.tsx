// view-added-flights/page.tsx
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ViewAddedFlightsPage = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        // Fetch flights data from the backend
        const response = await axios.get('http://localhost:3000/agency/flight', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Send the access token with the request
          },
        });
        setFlights(response.data);
      } catch (error) {
        setError('Failed to fetch flights data');
      }
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <h1>Added Flights</h1>
      {error && <p>{error}</p>}
      {flights.length > 0 ? (
        <div>
          {flights.map(flight => (
            <div key={flight.id}>
              <p>ID: {flight.id}</p>
              <p>Airline: {flight.airline}</p>
              <p>Departure Date Time: {new Date(flight.departureDateTime).toLocaleString()}</p>
              <p>Arrival Date Time: {new Date(flight.arrivalDateTime).toLocaleString()}</p>
              <p>Origin: {flight.origin}</p>
              <p>Destination: {flight.destination}</p>
              <p>Price: {flight.price}</p>
              <p>Username: {flight.username}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No flights added yet</p>
      )}
    </div>
  );
};

export default ViewAddedFlightsPage;
