import React, { useContext } from 'react'
import "./fooddisplay.css"
import { StoreContext } from "../../context/storecontext.jsx"
import Fooditem from '../foodItem/fooditem.jsx'

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)

  return (
     <div className="food-display" id='food-display'>
        <h2>Top Dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(category==="All" || category===item.category){
                    return <Fooditem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                }
                
            })}
        </div>
     </div>
  )
}

export default FoodDisplay
