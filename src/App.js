import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Contact from './containers/contact'
import Skills from './containers/skills'
import Portfolio from './containers/portfolio'
import Missing from './containers/missing'
import NavBar from './components/navBar'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='div-app'>
      <NavBar/>
      {/* particles js */}
      {/* navbar */}
      {/* main page content */}
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/resume' element={<Resume/>} />
        <Route  path='/skills' element={<Skills/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/portfolio' element={<Portfolio/>} />
        <Route  path='*' element={<Missing/>}/>

      </Routes>
   <Footer/>
    </div>
  )
}

export default App