import React from 'react'
import { Link } from 'react-router-dom'
import { episodes } from '../store'

function Episodes() {
  return (
    <div className='Episodes'>
      <div className="container">
        <div className="Episodes-header">
          <h3>Episodes</h3>
        </div>
        <div className="Episodes-back">
          <Link to={'/'}>Back</Link>
        </div>
        <div className="Episodes-block">
          <div className="Episodes-block-inner">
            <ul>
              {
                episodes.map((item) => {
                  return <li key={item.id} id={item.id}>
                    <p >{item.name}</p>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes;