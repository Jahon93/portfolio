import React from 'react';
import './works.scss'
import Trombones from './images/trombone.PNG'
import JStutorial from './images/jsTutorial.PNG'
import Momentum from './images/momentum-extension.PNG'
import AdviserBot from './images/adviserBot.PNG'
import PassangerCounter from './images/passanger-counter.PNG'
import SurveyForm from './images/surveyForm.PNG'
import Calculator from './images/Calculator.PNG'

export default function Works() {
  const data = [
    {
      id: "1",
      image: Trombones,
      title: 'Original Trombones',
      codeSource: 'https://github.com/Jahon93/product-landing-page/',
      websiteLink: 'https://product-landing-page1.netlify.app/',

    },
    {
      id: "2",
      image: JStutorial,
      title: 'JavaScript Tutorial',
      codeSource: 'https://github.com/Jahon93/Javascript-documentation/',
      websiteLink: 'https://javascript-documentation1.netlify.app/',

    },
    {
      id: "3",
      image: Momentum,
      title: 'Momentum Extension Clone',
      codeSource: 'https://github.com/Jahon93/Chrome-API',
      websiteLink: 'https://clever-chandrasekhar-513711.netlify.app/',

    },
    {
      id: "4",
      image: AdviserBot,
      title: 'CleverBot',
      codeSource: 'https://github.com/Jahon93/Smart-Bot',
      websiteLink: 'https://smart-bot.netlify.app/',

    },
    {
      id: "5",
      image: PassangerCounter,
      title: 'Passanger Counter App',
      codeSource: 'https://github.com/Jahon93/passenger-counter',
      websiteLink: 'https://bus-passenger-counter.netlify.app/',

    },
    {
      id: "6",
      image: SurveyForm,
      title: 'Survey Form',
      codeSource: 'https://github.com/Jahon93/Survey-form',
      websiteLink: 'https://surveyindeveleopment.netlify.app/',

    },
    {
      id: "7",
      image: Calculator,
      title: 'Calculator',
      codeSource: 'https://github.com/Jahon93/Calculator',
      websiteLink: 'https://practical-borg-a9ed93.netlify.app/',

    },
  ]

  return (
      <div className='works' id='projects'>
        <h1 className='works-header'>My Recent works</h1>
          <div className='works-container'>
          {data.map((i) => ( 
            <div className='works-items'>
              <img src={i.image} alt=""/>
              <h2 className='items-name'>{i.title}</h2>
              <ul>
                <li><a href={i.codeSource}>View Code</a></li>
                <li><a href={i.websiteLink}>See Project</a></li>
              </ul>          
            </div>
            ))}
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
