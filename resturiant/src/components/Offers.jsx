import React from 'react'

export default function Offers(props) {
  return (
    <section className="offers">
      <div className="container">

          {props.offers.map((offer,index)=>(
          <img className="offer" key={index} src={offer} alt="offer"/>
            ))}
          
          
      </div>
    </section>
  )
}
