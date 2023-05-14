import React from 'react'
import drone from './assets/drone-camera-section2.png';
const About = () => {
  return (
    <section id="about">
    <div class="content-width">
        <div class="about_section1">
            <div class="about_img">
                <img src={drone} alt=""/>
            </div>
            <div class="about_content">
                <h1>About <span>Skyways</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum itaque dolor repellendus, inventore magni sapiente eum quaerat cum aliquid vitae?
                <br/>
                <br/>
                Officiis rem id sint incidunt dolore recusandae adipisci quod optio voluptatibus possimus animi laudantium, similique ullam ipsum perspiciatis impedit.</p>
            </div>
        </div>
        <div class="about_section2">
            <div class="about_drone_detail">
                <span>55</span>
                <span>miles</span>
                <p>Range(can be extended)</p>
            </div>
            <div class="about_drone_detail">
                <span>65</span>
                <span>mph</span>
                <p>Max Cruise speed</p>
            </div>
            <div class="about_drone_detail">
                <span>44</span>
                <span>lbs</span>
                <p>Payload Mass</p>
            </div>
            <div class="about_drone_detail">
                <span>5.5</span>
                <span>gal</span>
                <p>Payload Volume</p>
            </div>
        </div>
    </div>
</section>

  )
}

export default About