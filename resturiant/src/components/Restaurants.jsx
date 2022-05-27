import React from 'react'
import Restaurant from './Restaurant'

export default function Restaurants(props) {
  return (
    <div className="container divider">
      <div className="cards">
          {props.restaurants.map((restaurant)=>(
            <Restaurant key={restaurant.id} restaurant={restaurant}/>

          ))}
      </div>
    </div>
  )
}
