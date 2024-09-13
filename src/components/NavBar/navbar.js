import React from 'react'
import './navbar.css'
import {Link } from 'react-scroll'
import contact_img from '../../assets/contact_img.png'

const Navbar = () => {
  return (
   <nav className="navbar">
    <div className="desktopMenu">
      <Link  className="desktopMenuListItem" >Home</Link>
      <Link  className="desktopMenuListItem" >About</Link>
      <Link  className="desktopMenuListItem" >Projects</Link>
      <Link  className="desktopMenuListItem" >Experience</Link>
      <Link  className="desktopMenuListItem" > Contact</Link>
    </div>
    <button div className="desktopMenuButton">
       <img src = {contact_img} alt="" className="desktopMenuImg" /> Contact Me </button> 
    
   </nav>
  )
}

export default Navbar