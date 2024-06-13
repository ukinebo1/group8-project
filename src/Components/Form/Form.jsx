import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className='formContainer'>
        <div className='formDetails'>
        <h1>
        <span>Reserve </span> Now,
        <br />
        Eat later!
      </h1>
      <form action="">
        <label htmlFor="name" className='label'>Name</label>
        <br />
        <input type="text" /> <br />
        <label htmlFor="people">E-mail address</label> <br />
        <input type="text" /> <br />
        <label htmlFor="text">Date</label> <br />
        <input type="text" /> <br />
        <label htmlFor="time">Time</label> <br />
        <input type="text"  /> <br />
        <label htmlFor="number">Phone number</label> <br />
        <input type="text" /> <br />
        <button className='button'>Reserve</button>
      </form>
      </div>
    </div>
  )
}

export default Form