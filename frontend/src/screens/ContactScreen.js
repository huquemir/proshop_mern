import React from 'react'


const ContactScreen = () => {
  return (
    <div className="wrapper">
    <h1>Contact Us</h1>
    <form action="/thanks">
    <fieldset>
       <label className='py-3'>
        <br></br>
         <p>Name</p>        
         <input name="name"/>
         <p className='py-3'>Email</p>
         <input name="email" />
         <p className='py-3'>Day of the week</p>
         <select name="daysofweeks" id="days" multiple>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
        <p className='py-3'>Best time of day to contact</p>
        <input type="checkbox" id="morning" name="mornings" value="Morning"></input>
        <label htmlFor="morning">Morning</label><br></br>
        <input type="checkbox" id="afternoon" name="afternoons" value="Afternoon"></input>
        <label htmlFor="afternoon">Afternoon</label><br></br>
        <input type="checkbox" id="evening" name="evenings" value="Evening"></input>
        <label htmlFor="evening">Evening</label>
       </label>
     </fieldset>
     <button type="submit" id="submit-form">Submit</button>
    </form>
  </div>
  )
}

export default ContactScreen
