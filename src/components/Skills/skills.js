import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
   <section id = 'skills'>
        <span className="skillTitle">
            What I do
        </span>
        <span className="skillDesc">I am skilled and passionate web designer with experience </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>
                        UI/UX design
                    </h2>
                    <p>
                        Theis is a demo text.
                    </p>
                </div>   
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>
                        Website Design
                    </h2>
                    <p>
                        this is a demo text can be changed while making the production ready site.
                    </p>
                </div>   
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>
                        App design.
                    </h2>
                    <p>
                        You can erite text related to mobile app development.
                    </p>
                </div>   
            </div>
        </div>
    </section>
  )
}

export default Skills