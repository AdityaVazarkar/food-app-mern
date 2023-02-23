import React from "react";
import Card from "../component/Card";
import Carousel from "../component/Carousel";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel/></div>

      <div className='m-2' style={{display: 'flex' ,padding:"", justifyContent:"space-between"}} >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
      
      <div><Footer /></div>
    </div>
  );
};

export default Home;
