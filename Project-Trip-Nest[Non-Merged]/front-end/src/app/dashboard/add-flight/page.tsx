"use client"
import axios from 'axios';
import { useState } from 'react';

const AddFlight = () => {
    const [flightData, setFlightData] = useState({
        airline: '',
        departureDateTime: '',
        arrivalDateTime: '',
        origin: '',
        destination: '',
        price: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        // If the input name is price, parse the value to an integer
        const value = e.target.name === 'price' ? parseInt(e.target.value) : e.target.value;
        setFlightData({ ...flightData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Posting JSON:", flightData);
        try {
            const response = await axios.post('http://localhost:3000/agency/add-flight', flightData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Send the access token with the request
                    'Content-Type': 'application/json' // Specify the content type as JSON
                },
            });
            console.log(response.data);
            setSuccessMessage('Flight added successfully!');
            // Clear form fields after successful submission
            setFlightData({
                airline: '',
                departureDateTime: '',
                arrivalDateTime: '',
                origin: '',
                destination: '',
                price: ''
            });
        } catch (error) {
            setError('Error posting flight data');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="airline" placeholder="Airline" value={flightData.airline} onChange={handleInputChange} />
                <input type="datetime-local" name="departureDateTime" placeholder="Departure Date & Time" value={flightData.departureDateTime} onChange={handleInputChange} />
                <input type="datetime-local" name="arrivalDateTime" placeholder="Arrival Date & Time" value={flightData.arrivalDateTime} onChange={handleInputChange} />
                <input type="text" name="origin" placeholder="Origin" value={flightData.origin} onChange={handleInputChange} />
                <input type="text" name="destination" placeholder="Destination" value={flightData.destination} onChange={handleInputChange} />
                <input type="number" name="price" placeholder="Price" value={flightData.price} onChange={handleInputChange} />
                <button type="submit">Add Flight</button>
                {error && <p>{error}</p>}
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>

    );
};

export default AddFlight;
