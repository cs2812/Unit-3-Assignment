import React from 'react'
import home from "./home.module.css"
import {useNavigate} from "react-router-dom"
import Footer from "./Footer"


const Home = () => {
    let navigate=useNavigate()
    let gotomen=()=>{
        navigate("/men")    
    }
    let gotowomen=()=>{
        navigate("/women")
    }
  return (
    <div>
        < div className={home.img1} >
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Rec/Header/English/Af-Unrec-PC-eng.gif" alt="" />
        </div>
        <h3>Men Products</h3>
        <div onClick={gotomen} className={home.men}>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_04.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_06.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_07.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_08.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_03.jpg" alt="" />
        </div>
        <h3>Momen Products</h3>
        <div className={home.men} onClick={gotowomen}>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_07.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_04.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_05.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_06.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_03.jpg" alt="" />
        </div>
        <Footer/>
      
    </div>
  )
}

export default Home
