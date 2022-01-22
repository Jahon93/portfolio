import React from 'react'
import './footer.scss'
import { FaGithubSquare} from "react-icons/fa"
import {SiLinkedin, SiInstagram, SiNetlify} from "react-icons/si";


function Footer() {
    return (
        <div className="footer" id='footer'>
        <a className='git-icon' href='https://github.com/Jahon93'><FaGithubSquare /> </a>
        <a className='in-icon'  href='https://www.linkedin.com/in/jahongir-iskandarov-a5286b105/'><SiLinkedin/> </a>
        <a className='netlify-icon'  href='https://app.netlify.com/teams/jahon93/overview?_ga=2.73564818.1641667257.1642831016-749102175.1638703153'><SiNetlify /> </a>
        <a className='instagram-icon'  href='https://www.instagram.com/jakhongir_iskandarov/'><SiInstagram /> </a>
        
        
        </div>
    )
}

export default Footer
