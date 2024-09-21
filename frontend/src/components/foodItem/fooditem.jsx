import React, { useContext } from 'react'
import "./fooditem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/storecontext.jsx';


const Fooditem = ({id,name,price,description,image}) => {

    
    const { cartitems, setCartitems, addTocart,removeFromcart,url}=useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+"/images/"+image} alt=''/>
            {!cartitems[id]
                ?<img className='add' onClick={()=>addTocart(id)} src={assets.add_icon_white} alt=''/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromcart(id)} className='remove' src={assets.remove_icon_red}/>
                    <p>{cartitems[id]}</p>
                    <img onClick={()=>addTocart(id)} src={assets.add_icon_green}/>
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt='' />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default Fooditem