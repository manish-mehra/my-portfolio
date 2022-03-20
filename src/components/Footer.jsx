import React from 'react'

export default function Footer() {
  return (
    <div  
    style={{
        display: "flex",
        justifyContent: "center",
        background: "#e1e1e145",
        padding: "1em 0em",
        marginTop: "5em"
        }}>

        <p 
            style={{
                fontSize: "14px",
                color: "#0000009a"
            }}>
        ©️ Manish Mehra 2022 <b>.</b> design inspired by <a href="https://www.matti.design/" target="_blank">Matti</a>
        </p>
    </div>
  )
}
