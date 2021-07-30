import React from 'react'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import profilePic from '../images/profilepic.jpg'

const ContactMe = () => {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (contactName !== '' && contactEmail !== '' && contactMessage !== '') {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text)
            window.alert(
              "Thank you for contacting me. I'll get back to you as soon as possible."
            )
          },
          (error) => {
            console.log(error.text)
            window.alert('Oops something went wrong.')
          }
        )
      e.target.reset()
    } else {
      window.alert('Please fill out every input')
    }
  }

  return (
    <div className='contactContainer'>
      <div className='contactCard'>
        <div className='contactPhotoContainer'>
          <img
            src={profilePic}
            className='contactPhoto'
            alt='contact card profile'
          />
        </div>
        <div className='contactInfoContainer'>
          <ul className='contactInfo'>
            <li>
              <i class='fa fa-map-marker contactIcon1' aria-hidden='true'></i>
              <a
                href='https://www.google.com/maps/@47.4813602,18.9902203,11z'
                className='contactCardInfo'
              >
                Budapest, Hungary
              </a>
            </li>
            <li>
              <i class='fa fa-envelope contactIcon2'></i>
              <a
                href='mailto: vataidomonkos@gmail.com'
                className='contactCardInfo'
              >
                vataidomonkos@gmail.com
              </a>
            </li>
            <li>
              <i class='fa fa-phone contactIcon3' aria-hidden='true'></i>
              <a href='tel:+36204765915' className='contactCardInfo'>
                +36204765915
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center mx-auto mt-3 formContainer' id='contactMe'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className='contactTitle mb-3'>Contact me</h3>
          <div className='form-floating formInputDiv'>
            <input
              type='text'
              placeholder='John Smith'
              id='contactName'
              className='form-control'
              name='name'
              onChange={(e) => setContactName(e.target.value)}
            />
            <label htmlFor='contactName'>Enter your name</label>
          </div>
          <div className='form-floating mt-3 formInputDiv'>
            <input
              type='email'
              placeholder='example@mail.com'
              id='contactEmail'
              className='form-control'
              name='email'
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <label htmlFor='contactName'>Enter your email address</label>
          </div>
          <div className='form-floating mt-3 formInputDiv'>
            <textarea
              className='form-control contactMessageBody'
              id='contactMessage'
              name='message'
              onChange={(e) => setContactMessage(e.target.value)}
            ></textarea>
            <label htmlFor='contactMessage'>Leave a message here</label>
          </div>
          <button className='btn w-50 btn-primary mt-3 formBtn' type='submit'>
            Send message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
