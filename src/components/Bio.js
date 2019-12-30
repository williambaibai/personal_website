import React from 'react'
import styles from './Bio.module.css'
import portrait from '../static/portrait.jpg'

function Bio(props) {
  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={portrait} alt="Me" />
      <p>
        Welcome! I am a senior studying computer science at Cornell.
        <br/>
        This is my personal blog and portfolio site. 
        <br/>
        If you find my content interesting, please leave a comment :)
      </p>
    </div>
  )
}

export default Bio
