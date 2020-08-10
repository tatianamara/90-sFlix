import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Tatiana Mara.png';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <FooterBase className="FooterFx">
            <a href="https://www.linkedin.com/in/tatiana-mara">
                <img className="Logo" src={Logo} alt="LogoTatiana" />
            </a>
            <div className="FooterFx">
                <a href="https://github.com/tatianamara" rel="noopener noreferrer" target="_blank" 
                     padding-right= "20px"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/tatiana-mara" rel="noopener noreferrer" target="_blank"
                    ><FaLinkedinIn /></a>
            </div>
        </FooterBase>
    );
}

export default Footer;
