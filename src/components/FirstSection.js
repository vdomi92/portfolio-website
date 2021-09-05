import React from 'react'
import profilePicture from '../images/profilepic.jpg'

const FirstSection = () => {
  const opening = ' Frontend Developer '
  return (
    <div className='firstSection text-center d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-3 firstSectionTitle'>{opening}</h1>
      <p className='mt-3 firstSectionParagraph'>
        With passion to create something new and exciting.
      </p>
      <img src={profilePicture} alt='profile' className='profilePicture mt-3' />
      <hr className='separatingLineOne' />
    </div>
  )
}

export default FirstSection
