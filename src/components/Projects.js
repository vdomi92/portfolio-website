import React from 'react'
import quizMe from '../images/quizMe.JPG'
import landingPageImg from '../images/landingPageImg2.jpg'

const Projects = () => {
  return (
    <div className='text-center projects pt-5 container-fluid' id='projects'>
      <h3 className='projectsTitle'>Examples of my projects</h3>
      <div className='row justify-content-center'>
        <div className='projectCard mt-5 col-lg-6'>
          <a
            target='_blank'
            href='https://vdomi-portfolio-quiz-me.netlify.app/'
            rel='noreferrer'
          >
            <img
              className='projectPreviewImage'
              alt='preview of project'
              src={quizMe}
            ></img>
          </a>
          <span className='projectLinkSpan'>Quiz</span>
        </div>

        <div className='projectCard mt-5 col-lg-6'>
          <a
            target='_blank'
            href='https://vdomi-portfolio-company-page.netlify.app/'
            rel='noreferrer'
          >
            <img
              className='projectPreviewImage'
              alt='preview of project'
              src={landingPageImg}
            ></img>
          </a>
          <span className='projectLinkSpan'>Company landing page</span>
        </div>
      </div>
      <p className='projectParagraph mt-5'>
        If you are interested in seeing more, visit my
        <a
          href='https://github.com/vdomi92/'
          target='_blank'
          rel='noreferrer'
          className='projectGitLink'
        >
          <span> GitHub page.</span>
        </a>
      </p>
      <hr className='separatingLineThree' />
    </div>
  )
}

export default Projects
