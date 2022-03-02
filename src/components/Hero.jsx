import React from 'react'

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero--heading">
            <p className='hero--title'>
                <b>Hi, I'm Manish Mehra.</b> <br/>
                I'm a student at Indraprasath University <br/>
                New Delhi, pursuing BCA<sup style={{fontSize: "14px"}}>(bachelor's in computer application)</sup> <br/>
                and an aspiring <b>web developer</b>.
            </p>

            <p className='hero--subtitle'>
            I'm passionate about creating web apps and I want to use  <br/> 
            technology to come up with creative solutions. You can find me on<br/> 
             <a href="https://github.com/manish-mehra">github</a>, or <a href = "mailto: itsmanishmehra@gmail.com">send an email</a>.
            </p>
        </div>
    </div>
  )
}
