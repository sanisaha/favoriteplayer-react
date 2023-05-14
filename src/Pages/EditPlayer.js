import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPlayer = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8005/api/index.php/${id}`).then(response=>setInputs(response.data))
    },[])
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8005/api/index.php/${id}`, inputs).then(function(response){
            navigate('/');
        });
}

    return (
        <div>
            <h1 className='text-center font-bold p-3'>Edit Player</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input className='input input-bordered input-success w-full max-w-x' value={inputs.name} type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>position: </label>
                            </th>
                            <td> 
                                <input className='input input-bordered input-success w-full max-w-x' value={inputs.position} type="text" name="position" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>club: </label>
                            </th>
                            <td>
                                <input className='input input-bordered input-success w-full max-w-x' value={inputs.club} type="text" name="club" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={8} className='text-center'>
                                <button className='btn-success p-1 px-4'>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </div>
    );
};

export default EditPlayer;