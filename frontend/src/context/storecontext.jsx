import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextPrivider = (props) => {

    const [cartitems, setCartitems] = useState({});
    const url = "https://bitecart-backend.onrender.com";
    const [token,setToken]=useState("");
    const [food_list,setFoodlist]=useState([]);

    const addTocart = async (itemId) => {
        if (!cartitems[itemId]) {
            setCartitems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const removeFromcart = async (itemId) => {
        setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }

    const getTotalcartamount = () => {
        let totalAmount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartitems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodlist(response.data.data)
    }

    const loadCartData = async (token) =>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartitems(response.data.cartData);
    }

    useEffect(()=>{
      async function loadData() {
        await fetchFoodList();
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
        }
      } 
      loadData(); 
    },[])

    const contextValue = {
        food_list,
        cartitems,
        setCartitems,
        addTocart,
        removeFromcart,
        getTotalcartamount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextPrivider
