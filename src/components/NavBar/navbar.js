import React, { useState } from 'react'
import './navbar.css'
import {Link } from 'react-scroll'
import logo  from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
   <nav className="navbar">
    <img src = {logo} alt="Logo" className="Logo"/>
    <div className="desktopMenu">
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem" >Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem" >About</Link>
      <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem" >Projects</Link>
      {/* <Link  className="desktopMenuListItem" >Experience</Link> */}
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" > Contact</Link>
    </div>
    <button div className="desktopMenuButton" onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'})
    }}>
       <img src = {contactImg} alt="" className="desktopMenuImg" /> Contact Me </button> 
    
    
    <img src = {menu} alt="Menu" className="mobMenu" onClick = {( ) => setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display :showMenu ? 'flex' : 'none'}}>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className="listItem"onClick={()=>setShowMenu(false)} >About</Link>
      <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}className="listItem"onClick={()=>setShowMenu(false)} >Projects</Link>
      {/* <Link  className="desktopMenuListItem" >Experience</Link> */}
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} > Contact</Link>
    </div>
    
   </nav>
  )
}



export default Navbar