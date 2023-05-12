import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './what-do-you-do.css'

const WhatDoYouDo = (props) => {
  return (
    <div className="what-do-you-do-container">
      <Helmet>
        <title>What-do-you-do - Ganatly</title>
        <meta
          name="description"
          content="Technology is the bridge between imagination and reality."
        />
        <meta property="og:title" content="What-do-you-do - Ganatly" />
        <meta
          property="og:description"
          content="Technology is the bridge between imagination and reality."
        />
      </Helmet>
      <div className="what-do-you-do-container1">
        <img
          src="/playground_assets/group%209.svg"
          alt="image"
          className="what-do-you-do-image"
        />
        <div className="what-do-you-do-container2">
          <Link to="/" className="what-do-you-do-navlink">
            Home 
          </Link>
        </div>
      </div>
      <div className="what-do-you-do-container3">
        <span className="what-do-you-do-text">
          Development of AI solutions. Development and implementation of
          artificial intelligence in various fields
        </span>
        <span className="what-do-you-do-text1">
          We actively participate in the creation and support of free open
          source projects
        </span>
      </div>
      <div className="what-do-you-do-container4"></div>
    </div>
  )
}

export default WhatDoYouDo
