import React from 'react'
import Child from './Child'
import homeCss from "./Home.module.css"
import btnCss from "./Button.module.css"

const Home = () => {
  return (
    <div className={homeCss.header}>
        <h1 className='home'>Home Component</h1>
        <Child />
        <button className={btnCss.loginbtn} type=''>Log In</button>
        <button className={btnCss.logoutbtn} type=''>Log Out</button>
    </div>
  )
}

export default Home