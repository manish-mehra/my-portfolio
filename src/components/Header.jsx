import React from 'react'
import MyPortfolioLogo from '../assets/my-portfolio-logo.png'
import { Link } from 'react-router-dom'

export default function Header() {


  return (
    <header className='header'>
        <a href="/"><img src={MyPortfolioLogo} alt="logo" className='header--logo'/></a>
        <section className='header--menu'>
            <span className='header--menu-option'>
              <Link to = "/">Work</Link>  
            </span>
            <span className='header--menu-option'>
              <Link to = "/about">About</Link>  
            </span>
        </section>
    </header>
    
  )
}
