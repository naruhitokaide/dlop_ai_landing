import React from 'react'
import  Head from 'next/head';
import Navbar from './../global/Navbar'
import Particle from './Particle';

const Header = () => {
  return (
    <>
      <Head>
        <link href='/css/header.css' rel='stylesheet' />
      </Head>
      <section className='welcome-area demo-hero' id='home'>
        <Navbar />
        <Particle/>
        {/* Background Shape*/}
        <div className='background-shape'>
          {/* <img src='/wave.svg' className='wave' /> */}
          <div
            className='circle3 wow fadeInRightBig'
            style={{
              visibility: 'visible',
              animationDuration: '4000ms',
              animationName: 'fadeInRightBig',
            }}
          />
          <div
            className='circle4 wow fadeInRightBig'
            style={{
              visibility: 'visible',
              animationDuration: '4000ms',
              animationName: 'fadeInRightBig',
            }}
          />
        </div>
        {/* Background Animation*/}
        <div className='background-animation'>
          <div className='star-ani' />
          <div className='cloud-ani' />
          <div className='circle-ani' />
          <div className='box-ani' />
        </div>

        <div className='container h-100'>
          <div className='row h-100 align-items-center justify-content-center'>
            {/* Welcome Content*/}
            <div className='col-12 col-md-8'>
              <div className='welcome-content text-center'>
                <h6 className='version-number mb-3'>Complex</h6>
                <div className='animated--headline'>
                  <h4 className='ah-headline animated-heading clip is-full-width'>
                    <span>Solve problem with dlops</span>
                  </h4>
                </div>

                <p
                  className='mb-4 wow fadeInUp'
                  style={{
                    visibility: 'visible',
                    animationDuration: '1000ms',
                    animationDelay: '200ms',
                    animationName: 'fadeInUp',
                  }}
                >
                  Application is Complex. Business is Complex. Complexity is Our
                  Bread and Butter. Deconstruct Your
                  <span className='font-weight-bold text-warning'>
                    &nbsp;Problem
                  </span>
                  &nbsp;Now.
                </p>
                <a
                  className='btn dlops-btn white-btn mt-3 wow fadeInUp'
                  href='mailto:enquiries@dlops.ai'
                  style={{
                    visibility: 'visible',
                    animationDuration: '1000ms',
                    animationDelay: '400ms',
                    animationName: 'fadeInUp',
                  }}
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
