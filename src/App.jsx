import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { planets } from './data/data'
import Homepage from './components/Homepage'

console.log(planets);

function App() {

  return (
    <>
      <Nav />
      <Homepage />
      <Footer />
    </>
  )
}

export default App
