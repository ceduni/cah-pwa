import './App.css'
import Header from './layout/Header'
import About from './layout/About'
import Footer from './layout/Footer'
import Work from './layout/Work'
import Skills from './layout/Skills'

function App() {
  return (
    <>
    <Header></Header>
    <main>
        <About></About>
        <Work></Work>
        <Skills></Skills>
    </main>

    <Footer></Footer>
    </>
  )
}

export default App
