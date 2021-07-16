import React from 'react'
import emailjs from 'emailjs-com'

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

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
          />
          <label htmlFor='contactName'>Enter your email address</label>
        </div>
        <div className='form-floating mt-3 formInputDiv'>
          <textarea
            className='form-control contactMessageBody'
            id='contactMessage'
            name='message'
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
