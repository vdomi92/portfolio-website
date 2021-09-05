import React from 'react'

const Introduction = () => {
  return (
    <div className='text-center introduction pb-5' id='aboutMe'>
      <div className='introCard text-center'>
        <h2 className='introGreeting'>
          Hi I'm Domonkos. Nice to meet you.
          <span className='wavingHand'>👋</span>
        </h2>
        <p className='introParagraph'>
          I'm looking for a position where I can work on interesting projects
          with the latest technologies, so I can grow as a person and developer.
          Some of the technologies I have experience with is <b>HTML</b>,{' '}
          <b>CSS</b>, <b>JavaScript</b>, <b>ReactJS</b>, <b>Bootstrap</b>, basic{' '}
          <b>Git</b>, but I'm more than happy to learn anything new. Most of the
          knowledge from the previously listed tech is self-taught. During my
          education at Soter-Line (OKJ) I've learned MySQL, C#, PHP. I will be
          starting my further computer science education at ELTE-IK evening
          classes in September.
        </p>
      </div>
      <hr className='separatingLineTwo' />
    </div>
  )
}

export default Introduction
