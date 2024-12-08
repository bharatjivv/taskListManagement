import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className='container d-flex justify-content-center align-items-center flex-column'>
            <h1>
                Task Management List App by Magic Brains!
            </h1>
            <p>
                Assignment Project
            </p>
            <button className='home-btn p-2'> Go to Task list</button>
        </div>
    </div>
  )
}

export default Home