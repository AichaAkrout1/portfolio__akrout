import React from 'react'
import  '../Scss/card.css'

function Card({children, className, onclick}) {
  return (
    <article className={`card ${className}`} onclick={onclick}>{children}</article>
  )
}

export default Card