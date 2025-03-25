import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import img from './image/kel.png'
import pdf from './pdf/KelvinCV.pdf'


import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className='home-container'>
<div className="container1">
      <p>Hi,I'm Kelvin</p>
      <h1>Front End <span>Developer</span></h1>
      <p className='para-2'>I have a strong background in creating visually appealing and user-friendly web experiences.I am motivated to find a role where i can challenge myself and provide value to website users.I am exicited to bring my knowledge and experience to a team and contribute to a company's success.</p>
      <div className='home-buttons'>
      <Link to="/contact"><button>Get in Touch</button></Link>
      <a href={pdf} download="Kelvin CV.pdf">
    <button>Download CV</button>
</a>

      
      </div>
      </div>
    
      <img src={img} alt='myPic' />
     
    </section>
  )
}

export default Home