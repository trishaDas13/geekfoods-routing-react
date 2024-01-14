import React, { useEffect, useState, useContext } from 'react';
import  axios  from 'axios';
import  FoodContext  from '../../context/FoodContext';
import './Foods.css';
import { Link, useParams } from 'react-router-dom';

function Foods() {
  let foodData = useContext(FoodContext);
  const params = useParams();

  //todo: fetch API
  async function fetchAPI() {
    let res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
    foodData.setFoodsData(res.data.meals);
  }
  useEffect(() => {
    fetchAPI();
  },[])
  
  return (
    <section className='foods'>
      { !foodData.foodsData ?
      (
        <span className="loader"></span>
      )
        :(foodData.foodsData.map((food) =>{
          return(
            <article key={food.idMeal} className="food_card">
              <img src={food.strMealThumb} alt={food.strTags}/>
              <h4>{food.strMeal}</h4>
              <div className="catagory">
                <p>{food.strCategory}</p>
                <button><Link to = {`/foods/${food.idMeal}`}>View Recipe</Link></button>
              </div>
            </article>
          );
        }))
      }
    </section>
  )
}

export default Foods;