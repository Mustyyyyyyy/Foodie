import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/footer'
import Body from './components/body'
import Bods from './components/bods'
import Bodyy from './components/bodyy'
import Bodyyy from './components/bodyyy'
import imagemu from './assets/rc.png.png'


const App = () => {
  return (
    <>
      <div className="position-relative w-100">
  <img
    src={imagemu}
    alt=""
    className="position-absolute d-none d-lg-block"
    style={{
      width: "670px",
      right: 0,
      top: 0,
      zIndex: -1
    }}
  />

  <div className="container-fluid p-0 position-relative" style={{ zIndex: 1 }}>
    <Navbar />
    <Hero />
    <Body />
    <Bods />
    <Bodyy />
    <Bodyyy />
    <Footer />
  </div>
</div>

    </>
  )
}

export default App