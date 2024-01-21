import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss"
const Footer = () => {
  return (
   <footer className="footer">
    <ContentWrapper>
      <ul className="menuItems">
      <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
      </ul>
      <div className="infoText">
      Mobix  is a leading free streaming website 2023 that offers users the opportunity to watch movies online without the need for registration. Boasting an extensive database and a range of impressive features, we are confident that  mobix is the premier destination for free online movie viewing. We highly recommend that you do not miss out on this exceptional platform.
                </div>
                <div className="socialIcons">
                <span className="icon" onClick={() => window.open('https://www.linkedin.com/in/kabin-shrestha-029062222/', '_blank')}>
                        <FaFacebookF />
                    </span>
                    <span className="icon" onClick={() => window.open('https://www.instagram.com/', '_blank')}>
                        <FaInstagram />
                    </span>
                    <span className="icon" onClick={() => window.open('https://www.linkedin.com/in/kabin-shrestha-029062222/', '_blank')}>
                        <FaTwitter />
                    </span>
                    <span className="icon" onClick={() => window.open('https://www.linkedin.com/in/kabin-shrestha-029062222/', '_blank')}>
                        <FaLinkedin />
                    </span>
                </div>

    </ContentWrapper>
   </footer>
  )
}

export default Footer 