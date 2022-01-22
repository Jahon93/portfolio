import React from 'react';
import './contact.scss';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
    <h1 className='contact-header'>Contact us</h1>
    <h3 className='contact-text'>I'm always interested in hearing about new projects,<br/> so if you would like to chat, let's get in touch.</h3>

      <div className="container">

        <div className="box left">
          <p>"Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains."</p>
          <p className='Bill-Gates'>Bill Gates</p>
          <img src="https://www.pegars.com/wp-content/uploads/2021/11/contact-us.png" alt="" />
        </div>
        
        <div className="box right">
            <form action="/action_page.php">
            <input type="text" id="fname" name="firstname" placeholder="First name" />
        
            <input type="text" id="lname" name="lastname" placeholder="Last name" />
        
            <textarea id="subject" name="subject" placeholder="Write me"></textarea>
        
            <button className='btn' type="submit" value="Submit">Get in touch</button>
          </form>
        </div>
      </div>
    
    </div>
      );
}
