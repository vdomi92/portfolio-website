import React from 'react'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const ContactMe = () => {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (contactName !== '' && contactEmail !== '' && contactMessage !== '') {
      emailjs
        .sendForm(
          'service_sx8unc7',
          'template_ktv7liq',
          e.target,
          'user_B9huvrUz1B3zdRjhzZsxz'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
      e.target.reset()
    } else {
      window.alert('Please fill out every input')
    }
  }

  return (
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
  )
}

export default ContactMe
