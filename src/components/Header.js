import React from 'react'
import headerCss from "./Header.module.css"

const Header = () => {
    return (
    <div className={headerCss.header}>
        <h1 className='header'>Thomas Shelby</h1>
        <p className='para'>By the order of peaky blinders...</p>
    </div>
  )
}

export default Header