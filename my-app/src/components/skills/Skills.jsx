import React from 'react';
import './skills.scss'

export default function Skills() {

const data = [
    {
        id: "1",
        title: "Front-end development",
        text: "Building responsive websites with an optimal user experience that achieves your business goals.",
        img: "https://brunopaula.com/images/services/front.svg",
    },
    {
        id: "2",
        title: "UI & UX design",
        text: "Identifying and solving user problems, creating intuitive, aesthetically-pleasing, interactive interfaces",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGttXCi9xAaCj_oAZJjOwviKzVBSM9P2rag&usqp=CAU",
    },
    {
        id: "3",
        title: "Performance, SEO, & accessibility testing",
        text: "Making your website fast, easy to find, and reaching the widest audience possible.",
        img: "https://silktide.com/app/uploads/2021/07/Public-sector-websites-header.png",
    },
];
    
      return (
          <div className="skills" id="skills">
            <div>
                <h1>Skills</h1>
            </div>

            <div className='wrap-box'>
            {data.map((d) => (
                <div className='container'>
                    <div className="box">
                        <div className="card">
                                <img src={d.img} alt="" />
                                <h3>{d.title}</h3>
                                <p>{d.text}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>

          </div>
        );
      }