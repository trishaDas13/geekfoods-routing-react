import React, { useEffect, useState, useContext } from 'react';
import  FoodContext  from '../../context/FoodContext';
import { Link, useParams } from 'react-router-dom';

function Details() {

  let foodData = useContext(FoodContext);
  const params = useParams();
    
  //todo: finding value for URL
    const foodDetails = foodData.foodsData.find((food) => food.idMeal == params.foodID);

  return (
    <section className="recipeDetails">
      {
        !foodData.foodsData ? (
          <h1>Loading...</h1>
        ) : (
          
            foodData.foodsData.map((food)=>{
              return (
                <div className="recipeContainer">
                  <h1>{food.strMeal}</h1>
                </div>
              )
            })
          
        )
      }
    </section>
  )
}

export default Details;