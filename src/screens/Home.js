import React , {useEffect,useState} from "react";
import Card from "../component/Card";
import Carousel from "../component/Carousel";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Home = () => {

    const [foodCat,setFoodCat] = useState([]);
    const [foodItem,setFoodItem] = useState([]);

    const loadData = async () =>{
        let response = await fetch("http://localhost:5000/api/foodData",{
          method: "POST",
          headers:{
                'Content-type': 'application/json'
          }

        });
        response = await response.json();

        setFoodItem(response[0]);
        setFoodCat(response[1]);
        // console.log(response[0],response[1]);
    }
    useEffect(()=>{
        loadData()
    },[])





  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel/></div>

      <div className='container' style={{ }} >
            {
                foodCat !==[]
                ? foodCat.map((data)=>{
                  return (
                    <div>{data.CategoryName}</div>
                  )
                })
                :<div>""""""""</div>
            }


        <div className='container1' style={{ display:"flex"}}>
        <Card/>
     
        </div>
      </div>
      
      
      <div><Footer /></div>
    </div>
  );
};

export default Home;
