import React from 'react'
import './intro.css'
import bg_image from '../../assets/bg_image.png'
import {Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I'm <span className="introName">Siddhartha Alwala</span><br/>Full Stack Developer</span>
            <p className="introPara">I am a skilled web designer with Experiencein creating visualizations</p>
            <Link> <button className="btn">Hire Me</button></Link>
        </div>
        <img src ={bg_image} alt="" className="bg" />
    </section>
  )
}

export default Intro