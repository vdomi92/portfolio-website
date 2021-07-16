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
          with the latest technologies so I can grow as a person and developer.
          Some of the technologies I have experience with is HTML, CSS,
          JavaScript, ReactJS, Bootstrap, but I'm more than happy to learn
          anything new. Most of the knowledge from the previously listed tech is
          self-taught. During my education I've learned MySQL, C#, PHP and also
          a glimpse of JavaScript which made me fell in love with it, that's why
          i chose to pursue it on my own too.
        </p>
      </div>
      <hr className='separatingLineTwo' />
    </div>
  )
}

export default Introduction
