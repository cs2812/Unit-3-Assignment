
import './App.css';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';
import userinfo from "./data/userdata.json";
import offers from "./data/offer.json";
import restaurants from "./data/restaurants.json";
import { useState } from 'react';

const filters={
  1:"Cost High to Lost",
  2:"Cost Lost to High",
  3:"Ratings",
  4:"Delivery Time",
  5:"Relevance",
};

function App() {

  const[filterBy,setFilterBy]=useState("")
  const[data,setData]=useState(restaurants)//json data

  const updateFilter=(newFilter)=>{
    switch(newFilter){
      case "1":{
        setFilterBy(1)
        data.sort((a,b)=>b.costfortwo-a.costfortwo)
        setData([...data]);
        break;
      }
      case "2":{
        setFilterBy(2)
        data.sort((a,b)=>a.costfortwo-b.costfortwo)
        setData([...data]);
        break;
      }
      case "3":{
        setFilterBy(3)
        data.sort((a,b)=>a.rating-b.rating)
        setData([...data]);
        break;
      }
      case "4":{
        setFilterBy(4)
        data.sort((a,b)=>a.deliveryTimings-b.deliveryTimings)
        setData([...data]);
        break;
      }
      default:{
        setData(restaurants);
        break
      }
    }

  }

  return (
    <div >
      <Navbar {...userinfo.lacation}/>
      <Offers offers={offers}/>

    <section className="near-you">

    <Filters filters={filters} currentFilteredBy={filterBy} updateFilter={updateFilter}/>
      <Restaurants  restaurants={data}/>
    </section>

      
    </div>
  );
}

export default App;
