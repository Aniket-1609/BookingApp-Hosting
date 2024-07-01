import React from 'react'
import './Contact.css'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import MailList from '../mailList/MailList'

const Contact = () => {

  

  return (
    <>
    <Navbar/>
    <Header type="list"/>
    <div className='loginsignup'>
      <form className='loginsignup-container'
      action="https://api.web3forms.com/submit" method="POST">
        <h1>Contact Form</h1>

        
          <input type="hidden" name="access_key" value="6199edd2-5268-4025-ac56-d1540556ac2d"/>
          <input type='text' placeholder='Your Name'   name='username' required/>
          <input type='email' placeholder='Your Email Address' name='email' required/>
          <input type='number' placeholder='Your Number' name='number' required/>
        

        <button type='submit'>Get all the details</button>

      </form>
    </div>
    <MailList/>
    <Footer/>
    </>
  )
}

export default Contact
       


        
        
        