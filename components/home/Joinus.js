import React from 'react'
import Head from 'next/head'
import Tilt from 'react-parallax-tilt'
import { Parallax } from 'react-scroll-parallax'

const Joinus = () => {
  return (
    <>
      <Head>
        <link href='/css/joinus.css' rel='stylesheet' />
      </Head>
      <section>
        <div id='steps' className='dlops-join-area ptb-100 b-cream'>
          <div className='container'>
            <div className='section-title'>
              <span>Join Us</span>
              <h2>Discover This Platform More Easy</h2>
              <p>
                Our platform can solve your complex problem in no time. Idea of
                next big platform that will change the future. Join us today and
                learn more.
              </p>
            </div>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <div className='dlops-join-img'>
                  <Tilt
                    className='parallax-effect-glare-scale'
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                  >
                    <Parallax
                      className='custom-class'
                      x={[10, 0]}
                      tagOuter='figure'
                    >
                      <img src='/chat.svg' className='step-1' alt='Image' />
                    </Parallax>
                  </Tilt>
                  <div className='dlops-join-shape'>
                    <img src='/shape1.png' className='shape-1' alt='Shape' />
                    <img src='/shape21.png' className='shape-21' alt='Shape' />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='dlops-join-card left-text'>
                  <div className='row align-items-center'>
                    <div className='col-lg-4 col-sm-6'>
                      <a
                        href='https://wa.me/%2B85267762922?text=Hello%20There!'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Tilt
                          className='parallax-effect-glare-scale'
                          perspective={500}
                          glareEnable={true}
                          glareMaxOpacity={0.45}
                          scale={1.02}
                        >
                          <div className='step-signle-card bg-success'>
                            <i className='ri-whatsapp-line ri-3x shadow'></i>
                          </div>
                        </Tilt>
                      </a>
                    </div>
                    <div className='col-lg-8 col-sm-6'>
                      <p>
                        This is version of Lorem Ipsum. Proin gravida nibh vel
                        velit auctor aliquet. Aen ean itudin, lorem quis
                        bibendum auctor, nisi elit cons tequat ipsum, nec
                        sagittis sem nibh id elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='dlops-join-card left-text'>
                  <div className='row align-items-center'>
                    <div className='col-lg-4 col-sm-6'>
                      <a
                        href='mailto:enquiries@dlops.ai'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Tilt
                          className='parallax-effect-glare-scale'
                          perspective={500}
                          glareEnable={true}
                          glareMaxOpacity={0.45}
                          scale={1.02}
                        >
                          <div className='step-signle-card bg-warning'>
                            <i className='ri-mail-line ri-3x'></i>
                          </div>
                        </Tilt>
                      </a>
                    </div>
                    <div className='col-lg-8 col-sm-6'>
                      <p>
                        This is version of Lorem Ipsum. Proin gravida nibh vel
                        velit auctor aliquet. Aen ean itudin, lorem quis
                        bibendum auctor, nisi elit cons tequat ipsum, nec
                        sagittis sem nibh id elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='dlops-join-card left-text'>
                  <div className='row align-items-center'>
                    <div className='col-lg-4 col-sm-6'>
                      <a
                        href='https://www.instagram.com/dlopsdev'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Tilt
                          className='parallax-effect-glare-scale'
                          perspective={500}
                          glareEnable={true}
                          glareMaxOpacity={0.45}
                          scale={1.02}
                        >
                          <div className='step-signle-card step-p bg-primary'>
                            <i className='ri-instagram-line ri-3x'></i>
                          </div>
                        </Tilt>
                      </a>
                    </div>
                    <div className='col-lg-8 col-sm-6'>
                      <p>
                        This is version of Lorem Ipsum. Proin gravida nibh vel
                        velit auctor aliquet. Aen ean itudin, lorem quis
                        bibendum auctor, nisi elit cons tequat ipsum, nec
                        sagittis sem nibh id elit.
                      </p>
                    </div>
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

export default Joinus
