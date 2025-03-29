import './style.scss'




const Skills = () => {
  const frontLabelPercentage = [
    {
      label:"HTML",
      percentage:90
    },
    {
      label:"CSS",
      percentage:90
    },
    {
      label:"Javascript",
      percentage:85
    },
    {
      label:"ReactJS",
      percentage:80
    },
    {
      label:"Redux",
      percentage:75
    },
  
    
  ]
  const backLabelPercentage = [
   
    {
      label:"Sass",
      percentage:85
    },
    {
      label:"Bootstrap",
      percentage:90
    },
    {
      label:"tailwind",
      percentage:90
    },
    {
      label:"firebase",
      percentage:90
    },
   
  ]
  const baseLabelPercentage = [
   
    {
      label:"graphic design",
      percentage:90
    },
    {
      label:"ui/ux",
      percentage:85
    },
    {
      label:"video editing",
      percentage:90
    },
    
    
  ]

   
  
      
  

  return (
    <section className="skills_container">
      <h1 className="skills_container_header">My Skills</h1>
      <div className="container4">
        <div className="frontend">
          <h3>Front end</h3>
          {
            frontLabelPercentage.map((frontListItem,index)=>(
              <div className="" key={index}>
                <div className='skill-label'>{frontListItem.label}</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width:`${frontListItem.percentage}%`}}></div>
                </div>

              </div>
            ))
          }
        </div>
        <div className="backend">
          <h3>Libraries</h3>
          {
            backLabelPercentage.map((frontListItem,index)=>(
              <div className="" key={index}>
                <div className='skill-label'>{frontListItem.label}</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width:`${frontListItem.percentage}%`}}></div>
                </div>

              </div>
            ))
          }
        </div>
        <div className="database">
          <h3>Design skills</h3>
          {
            baseLabelPercentage.map((frontListItem,index)=>(
              <div className="" key={index}>
                <div className='skill-label'>{frontListItem.label}</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width:`${frontListItem.percentage}%`}}></div>
                </div>

              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Skills