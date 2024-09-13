import React from 'react'
import './skills.css'
import ui_design_image from '../../assets/ui_design_image.png'
import springboot_Image from '../../assets/springboot_image.png'
import database_image from '../../assets/database_image.png'

const Skills = () => {
  return (
   <section id = 'skills'>
    <span className="skillTitle"> What I Do</span>
    <span className="skillDescription">I am a fullstack developer with 1.5 years of experience, specializing in building and maintaining both frontend and backend components of web applications. My expertise spans a range of technologies, including modern JavaScript frameworks like React for the frontend, and backend development using Spring, and databases such as MySQL and MongoDB. I focus on delivering efficient, scalable, and user-friendly solutions, ensuring smooth collaboration between the user interface and server-side logic to create seamless web experiences.</span>
    <div className="skillBars">
       <div className="skillBar">
        <img src={ui_design_image} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>
                UI/UX Design
            </h2>
            <p>
            I have strong skills in UI/UX design, with a focus on creating intuitive, user-centered interfaces. My expertise includes designing wireframes, prototypes, and high-fidelity mockups that ensure a seamless user experience across various platforms.
            </p>
        </div>
       </div>
       <div className="skillBar">
        <img src={springboot_Image} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>
                Spring Framework/Spring Boot/Spring Microservices
            </h2>
            <p>
                I have solid experience working with the Spring Framework and Spring Boot, specializing in building robust, scalable, and efficient web applications. My skills include developing RESTful APIs, implementing dependency injection, and managing database integrations using Spring Data JPA. I am proficient in creating microservices architecture, ensuring modularity and ease of maintenance.
            </p>
        </div>
       </div>
       <div className="skillBar">
        <img src={database_image} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>
                Database
            </h2>
            <p>
            I have solid skills in database management and design, with experience in working with relational databases like MySQL, PostgreSQL, and SQL Server. My expertise includes writing complex SQL queries, optimizing database performance, and designing efficient database schemas.
            </p>
        </div>
       </div>
    </div>
    </section>
  )
}

export default Skills