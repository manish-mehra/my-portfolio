import React from 'react'
import MyPortfolioLogo from '../assets/my-portfolio-logo.png'

export default function Header() {


  return (
    <header className='header'>
        <a href="/"><img src={MyPortfolioLogo} alt="logo" className='header--logo'/></a>
        <section className='header--menu'>
            <span className='header--menu-option'>Work</span>
            <span className='header--menu-option'>About</span>
        </section>
    </header>
    
  )
}
