import React from 'react'
import './Card.css'

export const Card = (props) => {
  return (
    <div className='Card' style={{backgroundColor: props.color || "white",  boxShadow: props.shadow}}>
      <img src={props.imgsrc} style={{height:props.imgH || "28vh", width:props.imgW || "23vw"}}></img>
      <h2 style={{margin:'0.75rem 1rem', color:props.headColor || "black"}}>{props.Heading}</h2>
      <h5 style={{margin:'0rem 1rem', fontWeight:'300',textAlign:props.alignText, color:props.subColor || "black",fontSize:"1.2rem"}}>{props.description}</h5>
    </div>
  )
}
