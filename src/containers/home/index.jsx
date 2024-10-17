import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import img from './image/kel.png'
const Home = () => {
  return (
    <section>
<div className="container1">
      <p>Hi,I'm Kelvin</p>
      <h1>Front End <span>Developer</span></h1>
      <p>I have a strong background in creating visually appealing and user-friendly web experiences.I am motivated to find a role where i can challenge myself and provide value to website users.I am exicited to bring my knowledge and experience to a team and contribute to a company's success.</p>
      <button>Get in Touch</button>
      </div>
    
      <img src={img} alt='image' />
     
    </section>
  )
}

export default Home