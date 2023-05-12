import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ganatly</title>
        <meta
          name="description"
          content="Technology is the bridge between imagination and reality."
        />
        <meta property="og:title" content="Ganatly" />
        <meta
          property="og:description"
          content="Technology is the bridge between imagination and reality."
        />
      </Helmet>
      <div className="home-container01"></div>
      <div className="home-container02">
        <div className="home-container03">
          <a
            href="https://ganatly.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <img
              alt="image"
              src="/playground_assets/group%207.svg"
              className="home-image"
            />
          </a>
          <span className="home-text">
            Technology is the bridge between imagination and reality.
          </span>
          <div className="home-container04">
            <a
              href="https://www.instagram.com/ganatlycom"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <img
                alt="image"
                src="/playground_assets/instagram-svgrepo-com.svg"
                className="home-image1"
              />
            </a>
            <div className="home-container05">
              <div className="home-container06">
                <div className="home-container07">
                  <a
                    href="https://twitter.com/ganatly"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/twitter-svgrepo-com.svg"
                      className="home-image2"
                    />
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://t.me/ganatlycom"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              <img
                alt="image"
                src="/playground_assets/telegram-svgrepo-com.svg"
                className="home-image3"
              />
            </a>
          </div>
          <div className="home-container08">
            <Link to="/what-do-you-do" className="home-navlink button">
              What do you do?
            </Link>
          </div>
        </div>
      </div>
      <div className="home-container09">
        <a href="mailto:me@ganatly.com?subject=" className="home-link4">
          <span className="home-text1">Mail:</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text3">me@ganatly.com</span>
        </a>
      </div>
    </div>
  )
}

export default Home
