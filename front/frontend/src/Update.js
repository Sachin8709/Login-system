// Install axios if not already installed: npm install axios

import React, { useState } from 'react';
import axios from 'axios';
import './Update.css'

const Update = () => {
    const [userId, setUserId] = useState('');
    const [updateData, setUpdateData] = useState({
        name: '',
        contact: '',
        age: '',
        dob: '',
        email: '',
        password: ''
    });

    const handleUpdate = () => {
        // Implement logic to update user data
        // Use axios.put() to send a PUT request to the server
        // You can update the state or perform any other actions as needed
        axios.put(`http://localhost:8080/update/${userId}`, updateData)
            .then(response => {
                console.log(response.data);
                // Handle success (update UI, show a message, etc.)
            })
            .catch(error => {
                console.error(error);
                // Handle error (show an error message, etc.)
            });
    };

    return (
        <div className='update'>
          <div className='update-inside'>
             <h1>Update User</h1>
             <div className='ddd'>
            <label>User ID: </label>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div className='ddd'>
            <label>Name: </label>
            <input type="text" value={updateData.name} onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })} />
            </div>
            <div className='ddd'>
            <label>Contact: </label>
            <input type="text" value={updateData.contact} onChange={(e) => setUpdateData({ ...updateData, contact: e.target.value })} />
            </div>
            <div className='ddd'>
            <label>Age: </label>
            <input type="text" value={updateData.age} onChange={(e) => setUpdateData({ ...updateData, age: e.target.value })} />
            </div>
            <div className='ddd'>
            <label>Date of Birth: </label>
            <input type="text" value={updateData.dob} onChange={(e) => setUpdateData({ ...updateData, dob: e.target.value })} />
            </div>
            <div className='ddd'>
            <label>Email: </label>
            <input type="text" value={updateData.email} onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })} />
            </div>
            <div className='ddd'>
            <label>Password: </label>
            <input type="text" value={updateData.password} onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })} />
            </div>
            <div className='ddd'>
            <button onClick={handleUpdate}>Update</button>
            </div>
            </div>
        </div>
    );
};

export default Update;
