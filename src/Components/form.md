import React, { useState } from 'react'
import './Form.css'

function Form() {
  const [name, setName] =useState("")
  const [email, setEmail] =useState("")
  const [date, setDate] =useState("")
  const [time, setTime] = useState("")
  const [number, setNumber ] =useState("")

const handleSubmit = async (e) =>{
e.preventDefault()
const formData = {name, email, date, time, number}
// https://g-ate-resturant.onrender.com
try {
  const respone = await fetch ("https://mocki.io/v1/403e957b-ec8d-40ed-9e33-08f971803294", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {'Content-Type': 'application/json'}
  })




  if(!respone.ok){
    throw new Error(`Api request is not successful with status ${respone.status}`)
  }
  const data = await respone.json()
  // console.log('API response:', data);
  

  if (data.success){
    console.log('Reservation Successful:', data);
    alert("Your order has been sent to your mail")
  }
  else{
    console.warn("Api response failed")
  }
} catch (error) {
  console.log(error)
}
}

  return (
    <div className='formContainer'>
        <div className='formDetails'>
        <h1>
        <span>Reserve </span> Now,
        <br />
        Eat later!
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name" className='label'>Name</label>
        <br />
        <input type="text" required id='name' value={name} onChange={(e)=> setName(e.target.value)} /> <br />
        <label htmlFor="people">E-mail address</label> <br />
        <input type="text" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
        <label htmlFor="text">Date</label> <br />
        <input type="text" id='date' value={date} onChange={(e)=>setDate(e.target.value)} /> <br />
        <label htmlFor="time">Time</label> <br />
        <input type="text" id='time' value={time} onChange={(e)=>setTime(e.target.value)} /> <br />
        <label htmlFor="number">Phone number</label> <br />
        <input type="text" id='number' value={number} onChange={(e)=>setNumber(e.target.value)}/> <br />
        <button className='button' type='submit'>Reserve</button>
      </form>
      </div>
    </div>
  )
}

export default Form







import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faSearch, faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Images/Frame 11.png'
import { NavLink, Outlet } from 'react-router-dom'
import rectangle3 from '../assets/Images/Rectangle 3.png'
import { useState } from "react";

const Rootlayout = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div >
<header className="header">
        <div className='logo'>
        <img src={logo} alt="" />
        <h1> <span>G</span>-Ate</h1>
       </div>
    <nav className={`nav ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} className="hamburgers-menu" />
        </div> 
        <div className={`nav-links ${isOpen ? 'show' : 'hide'}`}>
        <NavLink to='/'
        style={({isActive})=>({
          color:isActive ? '#990000' : '#000'
        })}>Home</NavLink> 
        
        <NavLink to='menu'

         style={({isActive})=>({
          color : isActive ? '#990000' : "#000"
        })} >Menu</NavLink> 
         
         <NavLink to='about us' style={({isActive})=>({
          color : isActive ? '#990000' : "#000"
        })}
         
         >About Us</NavLink> 

         <NavLink to='reservation'
          style={({isActive})=>({
            color : isActive ? '#990000' : "#000"
          })}
          >Reservation</NavLink>
        </div>
       
    </nav>

    <div className='flex-row-3'>
      <input type="text" placeholder="Search" />
      <p> <FontAwesomeIcon icon={faSearch}/> </p>
    </div>
</header>

<main>
<Outlet/>
</main>

    </div>
  )
}

export default Rootlayout  