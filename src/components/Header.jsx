import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


  return (
    <header className='header'>
        <a href="/"><img src="https://user-images.githubusercontent.com/31545725/159151445-4532ed6d-4cf7-4d45-9db6-d7dbe68f309c.png" alt="logo" className='header--logo'/></a>
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
