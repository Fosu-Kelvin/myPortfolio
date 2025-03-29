import img from './image/kel3.png'
import './style.scss'
const About = () => {
  
  return (
    <section className='about-container'>
      
      <div className="container2">
    <h1>About Me</h1>
    <h2>Front End Developer</h2>
    <p>
    Hi! I'm Kelvin Fosu, a passionate web developer with a strong background in creating visually appealing and user-friendly web experiences. With a degree in Computer Science and hands-on experience in modern web technologies, I specialize in building responsive websites that not only look great but also enhance user engagement.Over the past few years, I’ve had the privilege of working on various projects, ranging from small business websites to complex applications. I’ve developed a keen eye for detail and a deep understanding of user experience, which allows me to create sites that meet the needs of users while achieving business goals.I’m particularly excited about the intersection of design and technology. I believe that a great website should not only be functional but also evoke emotion and connect with users. My goal is to continue learning and growing in this dynamic field, always striving to improve my skills and deliver the best possible outcomes for my clients.In my next role, I’m eager to take on new challenges, collaborate with talented teams, and contribute to innovative projects that make a difference. If you're looking for a dedicated developer who is committed to excellence, I would love to connect and explore potential opportunities!</p>
    
    <h3>Personal Information</h3>
    <div className="personal-details">
    <p>Name: Kelvin Fosu</p>
   <p>Address: Ghana</p>
    <p>Email: kelfosu19@gmail.com</p>
    <p>Contact: +233531533328</p>
    </div>
    </div>
    <img src={img} alt={img}/>
    </section>
  )
}

export default About