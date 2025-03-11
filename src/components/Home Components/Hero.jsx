import React from 'react';
import chickwithU from "../../assets/images/chickwithU.png";
import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = (props) => {
  return (
    <div className='Hero'>
      <ul>
        <li><h1 style={{ color: '#5C5B8F' }}>Every Student's</h1></li>
        <li><h1 style={{ color: '#161E64' }}>Education Platform</h1></li>
        <li><h1 style={{ color: '#5E5BFB' }}>In The World</h1></li>
        <li>
          <h6 style={{ color: '#5F5B5B' ,fontSize:"1.5rem"}}>
            Your journey to excellence starts here. Explore a world of possibilities and shape
            the future you deserve.
          </h6>
        </li>
        {/* Show Start button only if props.temp is false */}
        {!props.temp && (
          <li>
            <Link to="/login"><button className='Start'>Start</button></Link>
          </li>
        )}
      </ul>
      <img src={chickwithU} alt='GirlwithLogo' className='Mascot' />
    </div>
  );
};
