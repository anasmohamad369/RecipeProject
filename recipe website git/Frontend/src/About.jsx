import React from 'react'
import "./About.css"
import cv from "../public/cv.pdf"
import Nav from "./Nav1"
export const About = () => {
    return (
        <>
            <Nav />
            <div className="mainabout">
                <div className="leftabout">
                  
                    <div className='Spancolor'></div>
                    <div className='details'>
                        <h2 className='nameofdev'> Mohamad Anass</h2>
                        <h5 className='emailofdev'>anasmohamad369gmail.com</h5>
                        <a href={cv} className='cvcss'>cv</a>
                    </div>
                
                </div>


                <div className="rightabout">
                    <div className="rightsubabout1">
                        <div className="rightaboutblock1">
                            <h2>About Me </h2>
                        </div>
                        <div className="rightaboutblock2">
                            <div>
                                <p> "Hello, I'm Mohamad Anass, a final-year student studying computer science. Passionate about web development, I specialize in React, HTML, and CSS. Eager to apply my skills, </p>
                            </div>

                            <div className='rightaboutblock3'>
                                <p>
                                    I'm currently working on a recipe website project. Excited to connect and learn from others in the tech community!
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="rightsubabout2">
                        <div className="rightside1">
                            <h3 className='latestrole'>Latest Roles</h3>
                        </div>
                        <div className="aboutmee">
                            <div className='images'>
                                <img src='../public/react.jpg' className='reactimg' />
                                <img src='../public/html-1-638.jpg' className='htmlimg' />
                            </div>
                            <div className="contextofimg" >
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <h2 style={{ fontSize: "f" }}>
                                        React Js
                                    </h2>
                                    <p>TechRenu</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <h2>
                                        HTML
                                    </h2>
                                    <p>
                                        TechRenu
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="mainnameapp">
                            <h4 className='rightside2'>Technologies</h4>
                            <div className="allimgtags">
                              
                                <img src="../public/cc.jpg" />
                                <img src="../public/ps.jpg" />
                                <img src="../public/ms365.jpg" />
                                <img src="../public/node.jpg" />
                                  <img src="../public/unnamed.png" />

                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}
