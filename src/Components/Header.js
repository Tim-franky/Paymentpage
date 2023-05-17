import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {RiArrowDropDownLine} from 'react-icons/ri'


export default function TopContainer() {
  return (
    <div className="top">
      <div className="left">
        <div>
          <img src='EDYODA.png' alt='edyoda'/>
        </div>
        <div className='course'>
          <h5>Courses</h5>
          <RiArrowDropDownLine size='30px'/>
        </div>
        <div className='program'>
          <h5>Programs</h5> 
          <RiArrowDropDownLine size='30px'/>
        </div>
      </div>
      <div className='right'>
        <div className='searchic'>
          <BsSearch/>
        </div>
        <div className="log"><h5 >Login</h5></div>
        <div>
          <button class='btn btn-primary rounded-pill'>JOIN NOW</button>
        </div>
      </div>

    </div>
  )
}
