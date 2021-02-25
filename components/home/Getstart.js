import React from 'react'
import Head from 'next/head'

const Services = () => {
  return (
    <>
      <Head>
        <link href='/css/getstart.css' rel='stylesheet' />
      </Head>
      <section className='get-start-area pt-5 bg-cream'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <div className='get-start-box'>
                <div className='col-lg-8'>
                  <div className='section-heading'>
                    <h5 className='section__meta'>#get in touch</h5>
                    <h2 className='section__title'>
                      Do you have any projects?
                    </h2>
                    <p className='section__sub'>
                      Contact us without any hesitate.
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='button-shared text-right'>
                    <a
                      className='theme-btn'
                      href='mailto:enquiries@dlops.ai'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      contact us <i className='ri-arrow-right-line text-white'></i>
                    </a>
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

export default Services
