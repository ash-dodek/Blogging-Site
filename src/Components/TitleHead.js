import React from 'react'
import '../css/home.css'


const TitleHead = (props) => {
  return (
    <div className='title-head'>
        <div className="title-head-text">
        {props.title}
        </div>
    </div>
  )
}

export default TitleHead
