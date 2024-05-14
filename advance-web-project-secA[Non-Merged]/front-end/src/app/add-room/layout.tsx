"use client"
import axios from 'axios';
import { useState } from 'react';

const AddRoom = () => {
    const [roomData, setRoomData] = useState({
        name: 'fahim Room',
        description: 'A Medium size room with all amenities',
        capacity: 2,
        pricePerNight: 75
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        // If the input name is capacity or pricePerNight, parse the value to an integer
        const value = e.target.name === 'capacity' || e.target.name === 'pricePerNight' ? parseInt(e.target.value) : e.target.value;
        setRoomData({ ...roomData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Posting JSON:", roomData);
        try {
            const response = await axios.post('http://localhost:3000/agency/add-room', roomData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Send the access token with the request
                    'Content-Type': 'application/json' // Specify the content type as JSON
                },
            });
            console.log(response.data);
            console.log("Room added");
        } catch (error) {
            setError('Error posting room data');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Room Name" onChange={handleInputChange} />
            <textarea name="description" placeholder="Description" onChange={handleInputChange}></textarea>
            <input type="number" name="capacity" placeholder="Capacity" onChange={handleInputChange} />
            <input type="number" name="pricePerNight" placeholder="Price Per Night" onChange={handleInputChange} />
            <button type="submit">Add Room</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default AddRoom;
