import { useState } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Homepage from './components/Homepage'
import SolarSystem from './components/SolarSystem'
import Planet from './components/Planet'
import AllPlanets from './components/AllPlanets'
import { planets } from './data/data'
import { mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto } from './data/data'
import './App.css'

// const PlanetsArray = {
//     mercury: mercury,
//     venus: venus,
//     earth: earth,
//     mars: mars,
// }

function App() {

  const [pageView, setPageView] = useState(null)
console.log(pageView);
  return (
    <>
      <Nav backHome={setPageView} changePage={setPageView}/>
      { !pageView && <Homepage solarSystemToggle={setPageView}/> }
      { pageView === "solarSystem" && <SolarSystem solarSystemToggle={setPageView}/> }
      { pageView === "allPlanets" && <AllPlanets choosePlanet={setPageView} /> }
      { pageView === "mercury" && <Planet {...mercury}/>}
      { pageView === "venus" && <Planet {...venus}/>}
      { pageView === "earth" && <Planet {...earth}/>}
      { pageView === "mars" && <Planet {...mars}/>}
      { pageView === "jupiter" && <Planet {...jupiter}/>}
      { pageView === "saturn" && <Planet {...saturn}/>}
      { pageView === "uranus" && <Planet {...uranus}/>}
      { pageView === "neptune" && <Planet {...neptune}/>}
      { pageView === "pluto" && <Planet {...pluto}/>}
      <Footer />
    </>
  )
}

export default App

// Add the sun
// add embedded youtube videos for each planet
// add embedded map in Sitemap page
// add "Other Heavenly Bodies"
