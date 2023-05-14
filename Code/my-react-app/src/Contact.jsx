import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
        <div class="content-width">
        <div class="contact_sections">
            <div class="contact_info">
                <h1>Get in <span>Touch!</span></h1>
                <p>ADDRESS: <span>Karachi, Pakistan</span></p>
                <p>CONTACT: <span>hello@gmail.com</span></p>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6301143814!2d66.59496406603012!3d25.19338949046156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1596825570206!5m2!1sen!2s" style="border-top-color: initial; border-top-style: initial; border-top-width: 0; border-right-color: initial; border-right-style: initial; border-right-width: 0; border-bottom-color: initial; border-bottom-style: initial; border-bottom-width: 0; border-left-color: initial; border-left-style: initial; border-left-width: 0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
            </div>
            <div class="contact_form">
                <form  id="contactForm">
                    <input type="text" name="userName" id="userName" class="user" placeholder="Enter your full Name" required=""/> 
                    <input type="email" name="emailAddress" id="email" class="email" placeholder="Enter your e-mail" required=""/>
                    <textarea name="message" id="message" class="message" cols="30" rows="10" placeholder="Type your message"></textarea> 
                    <button type="submit" form="contactForm" value="Submit">Submit</button>
                </form> 
            </div>
    </div>
    </div>
</section>
  )
}

export default Contact