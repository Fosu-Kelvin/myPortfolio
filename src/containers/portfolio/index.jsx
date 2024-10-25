import './style.scss'
import photo1 from './images/photo1.avif'
import photo2 from './images/photo2.jpeg'
import photo3 from './images/photo3.jpg'
import photo4 from './images/photo4.jpg'
import { FaShare } from 'react-icons/fa'

const Portfolio = () => {
  const pics = [photo1,photo2,photo3,photo4]
  const projectNames  = ["Weather App","To-do list App","Calculator","Stop Watch"]

  const links = [
    "https://github.com/Fosu-Kelvin/Weather-app1",
    "https://github.com/Fosu-Kelvin/To-do-list-app",
    "https://github.com/Fosu-Kelvin/calculator-app",
    "https://github.com/Fosu-Kelvin/stop-watch-app",
  ];
  return (
    <section className="portfolio-container">
      <h1 className="portfolio-container-h1">My Projects</h1>
      <div className="project-container">
        {
          pics.map((photo, index) =>(
            <div className="photo-con" key={index}>
              <img src={photo} alt={`photo${index+1}`} />
              <h2>{projectNames[index]}</h2>
              <a href={links[index]}><FaShare className='icon' /></a>
            </div>
          ))
        }
      </div>
  
    </section>
  )
}

export default Portfolio