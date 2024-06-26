import { useState } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Homepage from './components/Homepage'
import SolarSystem from './components/SolarSystem'
import Planet from './components/Planet'
import AllPlanets from './components/AllPlanets'
import NavBG from './components/NavBG'
import { mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto, sun } from './data/data'
import './App.css'

function App() {

    const [pageView, setPageView] = useState(null)
    
    return (
        <>
            <Nav backHome={setPageView} changePage={setPageView} />
            <NavBG />
            {!pageView && <Homepage solarSystemToggle={setPageView} />}
            {pageView === "solarSystem" && <SolarSystem solarSystemToggle={setPageView} />}
            {pageView === "allPlanets" && <AllPlanets choosePlanet={setPageView} />}
            {pageView === "sun" && <Planet {...sun} youtubeURL={"https://www.youtube.com/embed/2HoTK_Gqi2Q?si=cO4o35k03UgIWNG-"} />}
            {pageView === "mercury" && <Planet {...mercury} youtubeURL={"https://www.youtube.com/embed/0KBjnNuhRHs?si=IgKLInpQmHpQ-9hG"} />}
            {pageView === "venus" && <Planet {...venus} youtubeURL={"https://www.youtube.com/embed/BvXa1n9fjow?si=RloEu56LaGBcdLj6"} />}
            {pageView === "earth" && <Planet {...earth} youtubeURL={"https://www.youtube.com/embed/HCDVN7DCzYE?si=CHgLEWQXfhDfI6L6"} />}
            {pageView === "mars" && <Planet {...mars} youtubeURL={"https://www.youtube.com/embed/D8pnmwOXhoY?si=Y3AT60-8SW1rE3M0"} />}
            {pageView === "jupiter" && <Planet {...jupiter} youtubeURL={"https://www.youtube.com/embed/PtkqwslbLY8?si=9cMNYL-_Pg4VzsMw"} />}
            {pageView === "saturn" && <Planet {...saturn} youtubeURL={"https://www.youtube.com/embed/epZdZaEQhS0?si=LdqmqOjKIIv-fIgS"} />}
            {pageView === "uranus" && <Planet {...uranus} youtubeURL={"https://www.youtube.com/embed/m4NXbFOiOGk?si=Cswh77D9YD1YPrUi"} />}
            {pageView === "neptune" && <Planet {...neptune} youtubeURL={"https://www.youtube.com/embed/NStn7zZKXfE?si=GIt6llP5m3wDJdWV"} />}
            {pageView === "pluto" && <Planet {...pluto} youtubeURL={"https://www.youtube.com/embed/-iZio70bd-M?si=44aVxYnc0Xk6kMnC"} />}
            <Footer />
        </>
    )
}

export default App
