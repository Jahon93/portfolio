import React from 'react';
import './works.scss'
import img1 from './images/img1.PNG'
import img2 from './images/img2.PNG'
import img3 from './images/img3.PNG'
import img4 from './images/img4.PNG'
import adviserBot from './images/adviserBot.PNG'

export default function Works() {
  return (
      <div className='works' id='projects'>
      <h1 className='works-header'>My Recent works</h1>
        <div className='works-container'>
        <div className='works-items'>
          <img src={img1} alt=""/>
          <h2 className='items-name'>Original Trombones</h2>
          <ul>
            <li><a href='##'>View Code</a></li>
            <li><a href='##'>See Project</a></li>
          </ul>          
        </div>  

        <div className='works-items'>
          <img src={img2} alt=""/>
          <h2 className='items-name'>JavaScript Tutorial</h2>
          <ul>
            <li><a href='https://github.com/Jahon93/Javascript-documentation'>View Codee</a></li>
            <li><a href='https://javascript-documentation1.netlify.app/'>See Project</a></li>
          </ul>          
        </div> 

        <div className='works-items'>
          <img src={img3} alt=""/>
          <h2 className='items-name'>Survey Form</h2>
          <ul>
            <li><a href='https://github.com/Jahon93/Survey-form'>View Codee</a></li>
            <li><a href='https://surveyindeveleopment.netlify.app/'>See Project</a></li>
          </ul>          
        </div>  

        <div className='works-items'>
          <img src={img4} alt=""/>
          <h2 className='items-name'>Passanger Counter</h2>
          <ul>
            <li><a href='https://github.com/Jahon93/passenger-counter'>View Code</a></li>
            <li><a href='https://bus-passenger-counter.netlify.app/'>See Project</a></li>
          </ul>          
        </div>  

        <div className='works-items'>
          <img src={adviserBot} alt=""/>
          <h2 className='items-name'>Adviser Bot</h2>
          <ul>
            <li><a href='https://github.com/Jahon93/Smart-Bot'>View Code</a></li>
            <li><a href='https://smart-bot.netlify.app/'>See Project</a></li>
          </ul>          
        </div> 

        <div className='works-items'>
          <img className='netflix-img' src="https://www.whats-on-netflix.com/wp-content/uploads/2021/12/coming-to-netflix-this-week-december-20th-to-26th-2021.png"
           alt=""/>
          <h2 className='items-name netflix-name'>Netflix Clone</h2>
          <p className='soon-text'>Coming soon...</p>        
        </div>  

      </div>
      </div>
  );
}
