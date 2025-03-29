
import { useState } from 'react'
import './style.scss'


const Contact = () => {
const [formData,setFormData] = useState({
  name:"",
  email:"",
  description:""
})

const handleChange = (e) =>{
  const {name,value} = e.target
  setFormData({...formData,[name]:value})
}



/* 
const handleSubmit = () =>{
  
  
 setTimeout(() => {
  setFormData({
    name:"",
  email:"",
  description:""
 })
 },2000);

} */


  return (
    <section className='contact-container'>
      <div className="container3">
      <h1>Contact Me</h1>
      <h3>Let's talk</h3>
     <form className="form-container" action='https://formspree.io/f/mrbgbljv' method='POST'>
    
      <input type="text"
      placeholder="name"
      name='name'
      value={formData.name}
      onChange={handleChange}
      
      />
      
      <input
       type="text" 
       placeholder="email"
       name='email'
       required
       value={formData.email}
      onChange={handleChange}
       />
       <textarea
       placeholder="Description"
       name='description'
       value={formData.description}
      onChange={handleChange}
       />

       <button  /* onClick={handleSubmit} */  type='submit' >Submit</button>
     </form>
     </div>
   
    </section>
  )
}

export default Contact

