import React from 'react'
import './intro.css'
import bg_image from '../../assets/image.png'
import { Link } from 'react-scroll'
import btn_img from '../../assets/hireme.png'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I'm <span className="introName">Siddhartha Alwala</span><br/>Full Stack Developer</span>
            <p className="introPara">I am a skilled web designer with experience in creating <br/> visually appealing user friendly web applications.</p>
            <Link> <button className="btn"> <img src={btn_img} alt="" className='btn_img'/>Hire Me</button></Link>
        </div>
        <img src ={bg_image} alt="" className="bg" />
    </section>
  )
}

export default Intro