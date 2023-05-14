import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPlayer = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({...values, [name]: value}));
    }
        const handleSubmit = (event) => {
            event.preventDefault();
            axios.post('http://localhost:8005/api/', inputs);
            navigate('/');
    }
    return (
        <div>
            <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-md">
  <h2 className="text-lg font-medium mb-4">Add a new Player</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
      <input className="w-full border border-gray-400 p-2 rounded-md" type="text" id="name" name="name" onChange={handleChange} placeholder="Liolen Messi"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Position</label>
      <input className="w-full border border-gray-400 p-2 rounded-md" type="text" id="email" name="position" onChange={handleChange} placeholder="striker"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Club</label>
      <input className="w-full border border-gray-400 p-2 rounded-md" type="text" id="password" name="club" onChange={handleChange} placeholder='PSG'/>
    </div>
    <div className="mb-4">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Submit</button>
    </div>
  </form>
</div>

        </div>
    );
};

export default AddPlayer;