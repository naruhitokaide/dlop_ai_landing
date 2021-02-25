import React from 'react'
import Head from 'next/head'

const Aboutus = () => {
  return (
    <>
      <Head>
        <link href='/css/joinus.css' rel='stylesheet' />
        <link href='/css/companies.css' rel='stylesheet' />
      </Head>
      <section className='bg-cream'>
        <div id='steps' className='dlops-join-area ptb-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='about-item'>
                  <div className='about-heading section-heading'>
                    <h5 className='section__meta'>About our company</h5>
                    <h2 className='section__title'>
                      We Run on Collective Intelligence
                    </h2>
                    <div className='section-divider' />
                  </div>
                  {/* end section-heading */}
                  <div className='section-description'>
                    <p className='section__desc'>
                      Projects start with a problem statement. Solutions then
                      logical follow. Project are made of tasks.
                      <a
                        href='http://dlops.ai'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        &nbsp;<strong>Dlops</strong>
                      </a>{' '}
                      executes projects on this distributed talent network. Our
                      distributed engineering efforts are sourced based on each
                      task. Each project is carried out with carefully selected
                      talents for the right components.
                    </p>
                  </div>
                  {/* end section-description */}
                  <ul className='list-items'>
                    <li>
                      <div className='inline-items'>
                        <i className='ri-team-fill ri-2x text-warning'></i>
                        <h3 className='m-0 ml-1'>Dlops Dev</h3>
                      </div>
                      <p>
                        Projects are deconstructed, analysed, planned and
                        executed by our development team where they selectively
                        match our network of technologists to tasks that befit
                        their skills and experiences.
                      </p>
                    </li>
                    <li>
                      <div className='inline-items'>
                        <i className='ri-file-list-3-fill ri-2x text-warning'></i>
                        <h3 className='m-0 ml-1'>Lyceum</h3>
                      </div>
                      <p>
                        Lyceum is the exclusive community where passionate
                        technologists of every skill and experience level get
                        together to share, learn and empower each other. The Dev
                        team is also responsible for documenting, maintaining
                        and distributing software knowledge realised within the
                        community, through our publishing channels such as
                        Medium and LinkedIn.
                      </p>
                    </li>
                  </ul>
                </div>
                {/* end about-item */}
              </div>
              {/* end col-lg-6 */}
              <div className='col-lg-6'>
                <div className='image-box'>
                  <img
                    src='/about-img.jpg'
                    alt='about-img'
                    className='img__item'
                  />
                  <img
                    src='/about-img2.jpg'
                    alt='about-img'
                    className='img__item'
                  />
                  <img
                    src='/about-img3.jpg'
                    alt='about-img'
                    className='img__item'
                  />
                  <img
                    src='/about-img4.jpg'
                    alt='about-img'
                    className='img__item'
                  />
                </div>
                {/* end image-box */}
              </div>
              {/* end col-lg-6 */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
