import React from 'react'
import Head from 'next/head'

const Aboutus = () => {
  return (
    <>
      <Head>
        <link href='/css/joinus.css' rel='stylesheet' />
      </Head>
      <section>
        <div id='steps' className='dlops-join-area ptb-100'>
          <div className='container'>
            <div className='section-title'>
              <span>About Us</span>
              <img src="/shape14.png" alt="curve" className='g-line'/>
              <h2>Who Are We?</h2>
              <p className='g-des'>
                We are a network of designers, software engineers, data
                scientists and marketers whose passion for digital technologies
                binds us together to form this network of talents with abundant
                and diverse capabilities to tackle the most complex
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
