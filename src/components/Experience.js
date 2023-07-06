import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import "../Scss/experience.css";

function Experience({skills}) {
  return (
    <section id="experience" >
      <h5 style={{marginTop:"-9rem"}}>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='contenair'>
      {skills
        .map((el) => ( 
          <div className='cards'>
             <img src= {el.img}/>
             <h4>{el.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience