import React from 'react'



const ContactScreen = () => {
  return (
    <div className="wrapper">
    <h1>Contact Us</h1>
    <form>
    <fieldset>
       <label>
         <p>Name</p>
         <input name="name" />
         <p>Email</p>
         <input name="email" />
       </label>
     </fieldset>
     <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default ContactScreen
