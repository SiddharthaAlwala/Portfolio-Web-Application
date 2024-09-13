import React from 'react'
import './works.css'
import Project_1 from '../../assets/Project_1.png'
import Project_2 from '../../assets/Project_2.jpg'
import Project_3 from '../../assets/Project_3.jpg'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Projects</h2>
        <div className="worksImgs">
            <div className="workImg">
                <img src={Project_1} alt="" className="project_1" />
                <p>This is a react portfolio application</p>
            </div>
            <div className="workImg">
                <img src={Project_2} alt="" className="project_1" />
                <p>This is a react portfolio application</p>
            </div>
            <div className="workImg">
                <img src={Project_3} alt="" className="project_1" />
                <p>This is a react portfolio application</p>
            </div>
        </div>
    </section>
  )
}

export default Works