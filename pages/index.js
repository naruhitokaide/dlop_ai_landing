import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from './../components/home/Header'
import Joinus from '../components/home/Joinus'
import Companies from '../components/home/Companies'
import Aboutus from '../components/home/Aboutus'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Getstart from '../components/home/Getstart'
import Footer from '../components/home/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dlops</title>
      </Head>
      <header>
        <Header />
      </header>
      <main className='main'>
        <Aboutus />
        <ParallaxProvider>
          <Companies />
        </ParallaxProvider>
        <ParallaxProvider>
          <Joinus />
        </ParallaxProvider>
        <Services />
        <About
          img='/dev.png'
          title='Dev Team'
          heading='We Are Supporting All Kind Of IT Services Since 2021'
          brief='But I must explain to you how all this mistaken idea of
                      denouncing pleasure praising pain was born and I will give
                      you a complete account Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam consectetur adipiscing elit.'
        />
        <About
          img='/marketing.png'
          title='Marketing Team'
          heading='Helping clients with conversion focused marketing'
          brief='But I must explain to you how all this mistaken idea of
                      denouncing pleasure praising pain was born and I will give
                      you a complete account Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam consectetur adipiscing elit.'
        />
        <About
          img='/lyceum.png'
          title='Lyceum Team'
          heading='We help each other to learn new technologies everyday'
          brief='But I must explain to you how all this mistaken idea of
                      denouncing pleasure praising pain was born and I will give
                      you a complete account Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam consectetur adipiscing elit.'
        />
      </main>
      <footer>
        <Getstart />
        <Footer />
      </footer>
    </>
  )
}
