import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
const [players, setPlayers] = useState([]);
useEffect(()=>{
    axios.get('http://localhost:8005/api/').then(response=>setPlayers(response.data))
},[])

const deleteUser = (id) => {
    axios.delete(`http://localhost:8005/api/index.php/${id}`).then(response=>{
        axios.get('http://localhost:8005/api/').then(response=>setPlayers(response.data))
    })
}
    
    return (
        <div>
            <h1 className='text-center text-green-400 font-bold p-3'>My Favourite Player List</h1>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-purple-500">
      <tr className=' '>
        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Id</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Position</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Club</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {players.map((player,index)=>(
        <tr key={index} className='bg-blue-900'>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{player.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{player.position}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{player.club}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-300"><Link to={`player/${player.id}/edit`}>Edit</Link></td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500"><button onClick={() => deleteUser(player.id)}>Remove</button></td>
      </tr>
      ))}

    </tbody>
  </table>
</div>

        </div>
        
    );
};

export default Home;