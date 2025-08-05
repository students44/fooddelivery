import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets' // Assuming menu_list is an array of menu items

const ExploreMenu = ({category , setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 className='menu-heading'>Explore Our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse Featuring a delectable array of dishes.  featuring a mouthwatering selection of dishes crafted to satisfy every craving</p>
     
      <div className='explore-menu-list'>
         {menu_list.map((item, index)=>{
            return(
                <div onClick={()=> setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className='explore-menu-item-list'>
                    <img className={category=== item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                    <p className='menu-item-description'>{item.menu_name}</p>
                </div>
            )
         })}
      </div>

      
      <hr />
    </div>
  )
}

export default ExploreMenu
