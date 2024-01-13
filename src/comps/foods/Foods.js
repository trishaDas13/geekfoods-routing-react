import React, { useEffect, useState } from 'react';
import  axios  from 'axios';
import { nanoid } from 'nanoid';
import './Foods.css';

function Foods() {

  const [foodArray, setFoodArray] = useState();

  async function fetchAPI() {
    let res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
    setFoodArray(res.data.meals);
  }
  useEffect(() => {
    fetchAPI();
  },[])
  
  return (
    <section className='foods'>
      { foodArray && 
        foodArray.map((food) =>{
          return(
            <article key={food.idMeal} className="food_card">
              <img src={food.strMealThumb} alt={food.strTags}/>
              <h4>{food.strMeal}</h4>
              <div className="catagory">
                <p>{food.strCategory}</p>
                <button>View Recipe</button>
              </div>
            </article>
          );
        })
      }
    </section>
  )
}

export default Foods;