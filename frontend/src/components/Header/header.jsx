import React from 'react'
import "./header.css"
import homebg from "../../assets/homebg.png"

const Header = () => {
  return (
    <div className='header'>
      <img className='homebg' src={homebg} />
      <h2>THE TASTE OF INDIA</h2>
        <div className="header-contents">
            <h4>Order your favourite food here</h4>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button>View more</button>
        </div>
    </div>
  )
}

export default Header