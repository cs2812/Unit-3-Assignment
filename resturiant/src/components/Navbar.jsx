import React from 'react'
import logo from "../assets/logo.svg"

const navbarOption=[
  {
  iconName:"person_outline",
  label:"Sing In",
},
{
  iconName:"shopping_bag",
  label:"Cart",
},
{
  iconName:"support",
  label:"Help",
},
{
  iconName:"search",
  label:"Search",
},
]

export default function Navbar(props) {
  return (
    <section className="navbar">
    <div className="container">
        <img className="logo" src={logo} alt='logo'/>
        <div className="location">
            <span className="city">{props.city}</span>
            <span className="state">{props.state}, {props.country}</span>
        </div>
        <div className="navbar-options">
          {navbarOption.map((opt)=>
          
          <div key={opt.iconName}className="navbar-option">
                <span className="material-icons">{opt.iconName}</span>
                {opt.label}
            </div>
          )}
            
            
        </div>
    </div>
    
</section>
  )
}
