import React from 'react';
import './works.scss'
import img1 from './images/img1.PNG'
import img2 from './images/img2.PNG'
import img3 from './images/img3.PNG'
import img4 from './images/img4.PNG'

export default function Works() {
  return (
    <div >
      <div className='works' id='works'>
        <div className='works-container'>
        <div className='works-items'>
          <img src={img1} alt=""/>
          <h2 className='items-name'>Original Trombones</h2>
          <ul>
            <li><a href='##'>View Codee</a></li>
            <li><a href='##'>See Project</a></li>
          </ul>          
        </div>  

        <div className='works-items'>
          <img src={img2} alt=""/>
          <h2 className='items-name'>JavaScript Tutorial</h2>
          <ul>
            <li><a href='##'>View Codee</a></li>
            <li><a href='##'>See Project</a></li>
          </ul>          
        </div> 

        <div className='works-items'>
          <img src={img3} alt=""/>
          <h2 className='items-name'>Survey Form</h2>
          <ul>
            <li><a href='##'>View Codee</a></li>
            <li><a href='##'>See Project</a></li>
          </ul>          
        </div>  

        <div className='works-items'>
          <img src={img4} alt=""/>
          <h2 className='items-name'>People Counter</h2>
          <ul>
            <li><a href='##'>View Code</a></li>
            <li><a href='##'>See Project</a></li>
          </ul>          
        </div>  

        <div className='works-items'>
          <img src={img1} alt=""/>
          <h2 className='items-name'>x project</h2>
          <ul>
            <li><a href='##'>View Codee</a></li>
            <li><a href='##'>See Project</a></li>
          </ul>          
        </div> 

        <div className='works-items'>
          <img className='netflix-img' src="https://www.whats-on-netflix.com/wp-content/uploads/2021/12/coming-to-netflix-this-week-december-20th-to-26th-2021.png"
           alt=""/>
          <h2 className='items-name netflix-name'>Netflix Clone</h2>
          <p className='soon-text'>soon...</p>        
        </div>  

      </div>
      </div>

    </div>
  );
}
