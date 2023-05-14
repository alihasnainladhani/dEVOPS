import React from 'react'
import dronne from './assets/drone-camera-img.png'

const Home = () => {
  return (
    <header id="home">
        <div class="content-width">
            <div class="top_header">
                <div class="logo">
                    <h1>Devops Project</h1>
                </div>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav>
                    <div class="close">
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li><a class ="Home"  href="#home">Home</a></li>
                        <li><a class ="About" href="#about">About</a></li>
                        <li><a  class ="sale" href="#sale">Sale</a></li>
                        <li><a class ="usecase" href="#useCase">Use Case</a></li>
                        <li><a  class ="contact" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div class="hero_section">
                <div class="hero_content">
                    <h1>Transportation 
                        <br/>
                        Reinvented</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dicta sit tenetur quibusdam provident cumque cum aperiam?</p>
                        <div class="hero_btn">
                            <a href="">See it in action</a>
                            <a href="">Learn More</a>
                        </div>
                    </div>
                    <div class="hero_img">
                        <img src={dronne} alt="Drone Camera Img"/>
                </div>
            </div>
        </div>
    </header>

  )
}

export default Home