import React from 'react'
import icons from '../data/Icons.png'
import logo from '../data/Logo.png'

const Header = () => {
  return (
    <>
    <div className="bg-container">
        <div className="top-comp">
            <img src={logo} className="logo" alt="logo"/>
            <h1 className="heading">LOGO</h1>
            <img src={icons} className="icons" alt="icons"/>
        </div>
        <div className="navbar-section">
            <div>SHOP</div>
            <div>SKILLS</div>
            <div>STORIES</div>
            <div>ABOUT</div>
            <div>CONTACT US</div>
        </div>
    </div>
    <div className='description-section'>
            <h1 className='desc-heading'>
                DISCOVER OUR PRODUCTS
            </h1>
            <p className='para'>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
        </div>
    </>
  )
}

export default Header
