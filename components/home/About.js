import React from 'react'
import Head from 'next/head'
import Tilt from 'react-parallax-tilt'
const About = ({ img, title, heading, brief }) => {
  return (
    <>
      <Head>
        <link href='/css/about.css' rel='stylesheet' />
      </Head>
      <section className='dlops-team-area section-padding-120 mb-100'>
        <div id='about' className='about-us-two pt-70 pb-100'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <div className='about-two-img'>
                  <Tilt
                    className='parallax-effect-glare-scale'
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                  >
                    <img src={img} alt='Image' />
                  </Tilt>
                  <div className='about-shape'>
                    <img src='/shape17.png' className='shape-17' alt='Shape' />
                    <img src='/shape18.png' className='shape-18' alt='Shape' />
                    <img src='/shape19.png' className='shape-19' alt='Shape' />
                    <img src='/shape20.png' className='shape-20' alt='Shape' />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='about-two-text'>
                  <div className='section-title'>
                    <span>{title}</span>
                    <h2>{heading}</h2>
                    <p>{brief}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
