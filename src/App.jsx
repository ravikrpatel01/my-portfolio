import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Cursor  from './components/Cursor/Cursor'
import Banner from './components/Banner/Banner'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Cursor/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>   
      <Footer/>
    </div>
  )
}

export default App
