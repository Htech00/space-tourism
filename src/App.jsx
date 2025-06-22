
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Space from './components/Space'
import DestinationPage from './pages/DestinationPage'
import TechnologyPage from './pages/TechnologyPage'
import CrewPage from './pages/CrewPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/destination' element={<DestinationPage />} />
          <Route path='/technology' element={<TechnologyPage />} />
          <Route path='/crew' element={<CrewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
