import React, {useState} from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import FoodItem from '../../Components/Fooditem/FoodItem'

const Home = () => {


    const [category, setCategory] = useState("all");
  return (
    <div>
      

      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay  category={category}/>
     


      
    </div>
  )
}

export default Home
