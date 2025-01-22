'use client'

import React, { useEffect } from 'react';
import Header from './modules/Header';
import Form from './modules/Form';
import Footer from './modules/Footer';


function Home() {
  return (
    <div>
      <Header />
      <Form />
      <Footer />
    </div>
  )
}


export default Home;