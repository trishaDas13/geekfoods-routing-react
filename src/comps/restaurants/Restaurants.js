import React from 'react'
import Card from './Card'
import  data  from './data.json'
import { useState } from 'react'
import './Restaurants.css';

function Restaurants() {
    
    //todo ----- declaire state varriable -----
    const[name, setName] = useState();
    const[list, setList] = useState(data);

    //todo ----- filter Restaurants By Name -----
    function filterByName(value){
        setName(value);
        const filterList = data.filter((ele) => {
            return ele.name.toLowerCase().includes(value.toLowerCase())
        });
        setList(filterList);
    }   
    //todo ----- filter Restaurants By Name -----
    function filterByRating(value){
        const filterList = data.filter((ele) => {
            return ele.rating == value
        });
        setList(filterList);
        if(value == ""){
            setList(data);
        }
    }

  return (
    <>
        <div className="inputField">
            <div className="nameFilter">
                <label htmlFor='filter'>Filter by Name: </label>
                <input 
                    type="text" 
                    placeholder='Search with restaurant name'
                    value={name}
                    onChange={(e) => filterByName(e.target.value)}
                />
            </div>
            <div className="rateFilter">
                <label htmlFor='filter'>Filter by Ratings: </label>
                <input 
                    type="number" 
                    name="rating"
                    min={1}
                    step={0.5}
                    max={6}
                    placeholder='Ratings'
                    onChange={(e) => filterByRating(e.target.value)}
                />
            </div>
        </div>
       <div className="cardContainer">
        { 
            list.map((ele) =>{
                return(
                    <Card
                        name = {ele.name}
                        rating = {ele.rating}
                        location1 = {ele.address}
                        location2 = {ele.address2}
                        outcode = {ele.outcode}
                        postcode = {ele.postcode}
                        type = {ele.type_of_food}
                        link = {ele.URL}
                        key = {ele.id.id}
                    />
                );
            })
        }
       </div>
    
    </>
    
  )
}

export default Restaurants;