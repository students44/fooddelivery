import React from 'react'
import './AppDownload.css'

import { assets } from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better experience download <br />Khan App</p>
      <div className='app-download-platform'>
        <img src={assets.play_store} alt="play store" />
        <img src={assets.app_store} alt="app store" />
      </div>
    </div>
  )
}

export default AppDownload
