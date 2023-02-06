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

      <div className='m-3' style={{display: '' ,margin: '' }} >
        <Card/>
        <Card/>
        <Card/>
      </div>
      
      <div><Footer /></div>
    </div>
  );
};

export default Home;
