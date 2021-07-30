import React from 'react'
import testImg from '../images/testimg.jpg'
import landingPageImg from '../images/landingPageImg2.jpg'

const Projects = () => {
  return (
    <div className='text-center projects pt-5 container-fluid' id='projects'>
      <h3 className='projectsTitle'>Examples of my projects</h3>
      <div className='row justify-content-around'>
        <div className='projectCard mt-5 col-lg-3'>
          <a
            target='_blank'
            href='https://github.com/vdomi92?tab=repositories'
            rel='noreferrer'
          >
            <img
              className='projectPreviewImage'
              alt='preview of project'
              src={testImg}
            ></img>
          </a>
          <span className='projectLinkSpan'>Hangman</span>
        </div>

        <div className='projectCard mt-5 col-lg-3'>
          <a
            target='_blank'
            href='https://github.com/vdomi92?tab=repositories'
            rel='noreferrer'
          >
            <img
              className='projectPreviewImage'
              alt='preview of project'
              src={testImg}
            ></img>
          </a>
          <span className='projectLinkSpan'>Quiz</span>
        </div>

        <div className='projectCard mt-5 col-lg-3'>
          <a
            target='_blank'
            href='https://github.com/vdomi92?tab=repositories'
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
          href='https://github.com/vdomi92/landing-page'
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
