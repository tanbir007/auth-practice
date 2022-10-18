import React, { useContext } from 'react';
import { AuthContext } from './context/UserContext';

const Home = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <h1 className="text-2xl text-yellow-500">this is home of ,{user?.email}</h1>
        </div>
    );
};

export default Home;