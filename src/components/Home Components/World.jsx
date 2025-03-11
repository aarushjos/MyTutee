import React from 'react'
import './World.css'
import Map from '../../assets/images/map.png'

export const World = () => {
  return (
    <div className="World">
        <h1>Our students across the World</h1>
        <ul>
            <li><img src={Map} style={{width:'60vw'}}></img></li>
            <li><h2 style={{color:"#2F2D6E",fontSize:"2.5rem"}}>Students from across the globe are transforming their futures with us!</h2></li>
        </ul>
    </div>
  )
}
