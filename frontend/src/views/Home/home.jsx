import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/Header/header'
import Exploremenu from '../../components/Exploremenu/exploremenu'
import FoodDisplay from '../../components/FoodDisplay/foodDisplay'
import Appdownload from '../../components/appdownload/appdownload'


const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <>
      <div className='homejs'>
        <Header />
        <Exploremenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <Appdownload/>
      </div>
     
    </>
  )
}

export default Home