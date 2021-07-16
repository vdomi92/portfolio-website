import React from 'react'
import profilePicture from '../images/profilepic.jpg'

const FirstSection = () => {
  const opening = ' Frontend Developer '
  return (
    <div className='firstSection text-center d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-3 firstSectionTitle'>{opening}</h1>
      <p className='mt-3 firstSectionParagraph'>
        With passion and flair for design to create websites and apps.
      </p>
      <img
        src={profilePicture}
        alt='profile picture'
        className='profilePicture mt-3'
      />
    </div>
  )
}

export default FirstSection
