import React from 'react';
import './navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar' id='navbar'>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </div>
  )
}
