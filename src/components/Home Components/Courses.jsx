import React from 'react'
import './Courses.css'

export const Courses = (props) => {
  return (
    <div className='Courses' style={{background: props.gradient}}>
        <h1>{props.heading}</h1>
        <h3 style={{color: '#5F5B5B', margin:'0rem 8rem', fontWeight:'lighter',fontSize:"1.5rem"}}>{props.subhead}</h3>
        <ul>
            {props.cards.map((card, index) => (
                <li key={index}>{card}</li>
            ))}
        </ul>
    </div>
  )
}
