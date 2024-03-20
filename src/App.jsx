import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { planets } from './data/data'
import Homepage from './components/Homepage'
import { useState } from 'react'
import SolarSystem from './components/SolarSystem'
import Planet from './components/Planet'
import { mercury } from './data/data'

function App() {

  const [pageView, setPageView] = useState(null)

  return (
    <>
      <Nav backHome={setPageView} changePage={setPageView}/>
      { !pageView && <Homepage solarSystemToggle={setPageView}/> }
      { pageView === "solarSystem" && <SolarSystem solarSystemToggle={setPageView}/> }
      <Footer />
      <Planet {...mercury}/>
    </>
  )
}

export default App
