import React from 'react';
import './skill.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skill = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What i do</span>
            <span className="skillDecs">I am a skilled website developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS, and JavaScript.  </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIdesign" className='skillBarImg' />
                    <div className="skillBarTxt">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
                    <div className="skillBarTxt">
                        <h2>WebSite Design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
                    <div className="skillBarTxt">
                        <h2>App Design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
