import React from 'react'
import './Universities.css'
import UCSD from "../../assets/images/Uni Symbols/UCSD_Seal.png"
import UCLA from "../../assets/images/Uni Symbols/ucla.png"
import UCB from "../../assets/images/Uni Symbols/UCB.png"
import NYU from "../../assets/images/Uni Symbols/NYU.png"
import Mellon from "../../assets/images/Uni Symbols/Mellon.png"

export const Universities = () => {
  return (
    <div className='Universities'>
        <h1>Our students excel in top universities worldwide</h1>
        <ul>
            <li><img src={UCSD} style={{height: '15vh'}}></img></li>
            <li><img src={UCLA} style={{height: '9vh'}}></img></li>
            <li><img src={UCB} style={{height: '17vh'}}></img></li>
            <li><img src={NYU} style={{height: '17vh'}}></img></li>
            <li><img src={Mellon} style={{height: '17vh'}}></img></li>
        </ul>
    </div>
  )
}