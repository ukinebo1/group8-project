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