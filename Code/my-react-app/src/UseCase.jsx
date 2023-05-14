import React from 'react'
import drone from './assets/drone-camera-section4.png';
const UseCase = () => {
  return (
    <section id="useCase">
    <div class="content-width">
        <div class="useCase_section">
            <div class="useCase_img">
                <img src={drone} alt=""/>
                <div class="img_box"></div>
            </div>
            <div class="useCase_content">
                <div class="useCase_content1">
                    <h1>Use <span>Cases</span></h1>
                    <h3>ship-to-shore, shore-to-ship</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore!</p>
                    <h3>Reduce load carried by soldiers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet.</p>
                    <h3>Offshore platforms</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta!</p>
                    <a href="">Get in touch</a>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default UseCase