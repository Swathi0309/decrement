import React from 'react'
import { useParams } from 'react-router-dom';

const About = () => {  
  const { name} = useParams();
  return (
    <div>
        <h2>I am Arlapudi swathi{name}</h2>
        <h4>Hands-on experience in C programming, focusing on algorithms, pointers, and memory management. Strong understanding of front-end and back-end workflows for seamless application development. 	Built dynamic user interfaces using React.js, 
            focusing on reusable components and state management.  </h4>
    </div>
  )
}

export default About; 
//when use params is non rendering