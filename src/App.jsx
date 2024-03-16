import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HomeInfo from './components/HomeInfo'
import Nav from './components/Nav'
import { planets } from './data/data'

console.log(planets);

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <HomeInfo />
      <Footer />
    </>
  )
}

export default App
