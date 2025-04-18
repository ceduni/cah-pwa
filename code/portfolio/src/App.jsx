import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'

function App() {
  return (
    <Router>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
      </Routes>
      {/* <main>
      
      </main> */}

      <Footer></Footer>
    </Router>
  )
}

export default App
