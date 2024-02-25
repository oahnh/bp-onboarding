import React from 'react';
import "./App.css";
import ProfileCard  from "./components/ProfileCard/ProfileCard";
import img1 from './assets/zzz.jpeg';


const data = {
    name: "Noah Hernandez",
    position: "Web Developer",
    description:
      "This is my bio! I like to surf, hike, and climb! Currently studying Data Science @ UC Berkeley and trying to grow my ear for music",
    email: "noahh_@berkeley.edu",
    imgPath: 'public/zzz.jpeg',
  };

function App() {
  

  const {name, position, description, email } = data;
  
  return (
    <div className='App'>
      <ProfileCard name={name} position={position} description={description} email={email} imgPath={img1} /> 
    </div>
  )
}

export default App;
