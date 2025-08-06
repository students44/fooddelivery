import React, {useState} from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import FoodItem from '../../Components/Fooditem/FoodItem'
import AppDownload from '../../Components/AppDownload/Appdownload'

const Home = () => {


    const [category, setCategory] = useState("all");
  return (
    <div>
      

      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay  category={category}/>
      <AppDownload />
     


      
    </div>
  )
}

export default Home
