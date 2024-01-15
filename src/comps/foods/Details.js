import React, { useContext } from 'react';
import  FoodContext  from '../../context/FoodContext';
import { useParams } from 'react-router-dom';
import './Foods.css';

function Details() {

  let foodData = useContext(FoodContext);
  const params = useParams();
    
  //todo: finding specific value for URL
    const foodDetails = foodData.foodsData.find((food) => food.idMeal === params.foodID);
    window.scrollTo(0, 0);
 
  return (
    <section className="recipeDetails">
      {
        <div className="recipe_container">

          <div className="recipe_details">
          <div className="recipe_container_left">
            <img src={foodDetails.strMealThumb} alt={foodDetails.strMeal} />
          </div>
          <div className="recipe_container_right">
          <div className="recipe_name">
            <h2>{foodDetails.strMeal}</h2>
            <p>{foodDetails.strTags}</p>
          </div>
            <p className="instruction"><strong>Instruction: </strong> {foodDetails.strInstructions}</p>
            <div className="ingredients">
            <details>
              <summary>Ingredients - Click to see more</summary>
              <p><span>{foodDetails.strIngredient1}</span>  <span>{foodDetails.strMeasure1}</span></p>
              <p><span>{foodDetails.strIngredient2}</span>  <span>{foodDetails.strMeasure2}</span></p>
              <p><span>{foodDetails.strIngredient3}</span>  <span>{foodDetails.strMeasure3}</span></p>
              <p><span>{foodDetails.strIngredient4}</span>  <span>{foodDetails.strMeasure4}</span></p>
              <p><span>{foodDetails.strIngredient5}</span>  <span>{foodDetails.strMeasure5}</span></p>
              <p><span>{foodDetails.strIngredient6}</span>  <span>{foodDetails.strMeasure6}</span></p>
              <p><span>{foodDetails.strIngredient7}</span>  <span>{foodDetails.strMeasure7}</span></p>
              <p><span>{foodDetails.strIngredient8}</span>  <span>{foodDetails.strMeasure8}</span></p>
              <p><span>{foodDetails.strIngredient9}</span>  <span>{foodDetails.strMeasure9}</span></p>
              <p><span>{foodDetails.strIngredient10}</span>  <span>{foodDetails.strMeasure10}</span></p>
              <p><span>{foodDetails.strIngredient11}</span>  <span>{foodDetails.strMeasure11}</span></p>
              <p><span>{foodDetails.strIngredient12}</span>  <span>{foodDetails.strMeasure12}</span></p>
              <p><span>{foodDetails.strIngredient13}</span>  <span>{foodDetails.strMeasure13}</span></p>
              <p><span>{foodDetails.strIngredient14}</span>  <span>{foodDetails.strMeasure14}</span></p>
              <p><span>{foodDetails.strIngredient15}</span>  <span>{foodDetails.strMeasure15}</span></p>
            </details>
          </div>
          </div>
          </div>
          
        </div>
      }
    </section>
  )
}

export default Details;