import React from 'react'
import './Restaurants.css'

function Card(props) {
  return (
    <>
        <div className="card_restaurants" key= {props.key}>
            <div className="nameArea">
                <h3 className="name">{props.name}</h3>
                <span className="rating"> {props.rating} ⭐</span>
                <p className="location">{props.location1}, {props.location2}</p>
                <p className="outcode">{props.outcode} {props.postcode}</p>
            </div>
            <div className="menuArea">
                <p className="type">{props.type}</p>
                <a href={props.link}>Visit Menu</a>
            </div>
        </div>
    </>
  )
}

export default Card;