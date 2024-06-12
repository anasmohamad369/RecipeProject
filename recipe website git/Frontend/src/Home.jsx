import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from './Loader'; // Your Loader component
import Nav1 from './Nav1.jsx';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or other delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 3 seconds delay

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
       <Nav1 />
   
   <div className='container'>
  <div className='container1'>
   <h1 className='head'> create your own Recipe </h1>
    <button className='glow-on-hover'>
   <Link to='/Create' className='cre'>
   Click here
   </Link>
    </button>
    </div>
 </div>
    </>
   
 
  );
};

export default MainPage