import './App.css'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Hero from './components/Hero'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
