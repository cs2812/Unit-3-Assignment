import React from 'react'

export default function Restaurant({restaurant}) {
  return (
   
     <div className="card" >
                <img alt='card' width="254" height="160px" src={restaurant.image} />
                <div className="restaurant-details">
                    <div className="restaurant-title">{restaurant.name}</div>
                    <div className="restaurant-subtitle">
                      {restaurant.category.join(",")} </div>
                </div>
                <div className="restaurant-info">
                    <div className="restaurant-ratings">
                        <i className="material-icons star-icon">star</i>{restaurant.rating}
                    </div>
                    .<div className="restaurant-delivery-timings">{restaurant.deliveryTimings} MINS</div> .
                    <div className="restaurant-cost-for-two">₹ {restaurant.costfortwo+" "}FOR TWO</div>
                </div>
                <div className="offer-banner">
                    <span className="material-icons"> local_offer </span>
                    <span className="offer-text">{restaurant.offers.join(" | ")}</span>
                </div>
            </div>
  
  )
}
