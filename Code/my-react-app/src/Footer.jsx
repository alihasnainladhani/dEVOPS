import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div class="content-width">
        <div class="footer_section">
            <div class="footer_logo">
                <h1>Devops Project</h1>
            </div>
            <div class="footer_nav">
                <ul>
                    <li><a class="footer_Home" href="#home">Home</a></li>
                    <li><a class="footer_About" href="#about">About</a></li>
                    <li><a class="footer_Sale" href="#sale">Sale</a></li>
                    <li><a class="footer_UseCase" href="#useCase">Use Case</a></li>
                    <li><a class="footer_Contact" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        <hr/>
        <div class="copyright">
            <p>@ Website created by 
                
                <a class="youtube_copyRight" href="https://www.youtube.com/c/Ladhani786" target="_blank">
            Devop's Project
            </a>
        </p>
            <p>All right Reserved
                
            </p>
        </div>
    </div>
</footer>
  )
}

export default Footer