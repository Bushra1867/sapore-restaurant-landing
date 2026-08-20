import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import { Helmet } from 'react-helmet-async'

function App() {
  return (
    <div className="min-h-screen bg-[#171713] text-[#f6f0e4]">
      <Helmet>
        <title>Sapore | Authentic Italian Dining in Istanbul</title>
        <meta name="description" content="Discover handmade pasta, fresh ingredients and authentic Italian hospitality at Sapore in Istanbul." />
        <meta name="keywords" content="Italian restaurant, handmade pasta, Istanbul dining, authentic Italian cuisine, Sapore" />
        <meta name="theme-color" content="#171713" />
        <meta property="og:title" content="Sapore | Authentic Italian Dining in Istanbul" />
        <meta property="og:description" content="Discover handmade pasta, fresh ingredients and authentic Italian hospitality at Sapore in Istanbul." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Location />
      <Contact />
      <Welcome />
      <Footer />
    </div>
  )
}

export default App