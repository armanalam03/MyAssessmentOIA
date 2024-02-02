import React from 'react'
import '../styles/LoginPage.css'
import LoginContainer from '../components/LoginContainer'

// Assets Imports
import BaseLogo from '../assets/icons/base-logo.png'
import GitHubIcon from '../assets/icons/github-icon.png'
import TwitterIcon from '../assets/icons/twitter-icon.png'
import LinkedInIcon from '../assets/icons/linkedin-icon.png'
import DiscordIcon from '../assets/icons/discord-icon.png'

function LoginPage() {
  return (
    <section className="login-page-container">
      <section className="navbar">
        <img src={BaseLogo} alt="Base Logo" className='logo' />
        <span className='company-name'>BASE</span>
        <section className="social-media-handles-container">
          <img src={GitHubIcon} alt="Github" className="social-media-handle" />
          <img src={TwitterIcon} alt="Twitter" className="social-media-handle" />
          <img src={LinkedInIcon} alt="LinkedIn" className="social-media-handle" />
          <img src={DiscordIcon} alt="Discord" className="social-media-handle" />
        </section>
      </section>

      <section className="login-form-container">
        <LoginContainer />
      </section>
    </section>
  )
}

export default LoginPage