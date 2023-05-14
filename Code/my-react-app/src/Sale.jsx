import React from 'react'

const Sale = () => {
  return (
    <section id="sale">
        <div class="content-width">
            <div class="sale_content">
                <h1>Sale <span>Now On</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, deleniti neque veritatis iusto iste assumenda maxime quidem animi? Saepe, cupiditate!</p>
                <div class="countdown">
                    <div id="day">NA</div>
                    <div id="Hour">NA</div>
                    <div id="Minute">NA</div>
                    <div id="Second">NA</div>
                </div>
                <ul>
                    <li><a href=""><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fab fa-google" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fab fa-vimeo-v" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
    
  )
}

export default Sale