import React from 'react'
import Head from 'next/head'

const Services = () => {
  return (
    <>
      <Head>
        <link href='/css/footer.css' rel='stylesheet' />
      </Head>
      <section className='py-5  px-5 between flex-wrap text-muted sm-center'>
        <div className='c'>Copyright @2021 dlops. All Rights Reserved</div>
        <div className='social-icons'>
          <a
            href='https://wa.me/%2B85267762922?text=Hello%20There!'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='ri-whatsapp-line ri-lg lh-0'></i>
          </a>
          <a
            href='mailto:enquiries@dlops.ai'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='ri-mail-line ri-lg lh-0'></i>
          </a>
          <a
            href='https://www.instagram.com/dlopsdev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='ri-instagram-line ri-lg lh-0'></i>
          </a>
        </div>
      </section>
    </>
  )
}

export default Services
