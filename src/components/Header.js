import React from 'react'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-light'>
      <div className='container-fluid'>
        <span className='navbar-brand'>{'< />'}</span>

        <div className='navbar-content '>
          <ul className='navbar-nav d-flex justify-content-center'>
            <li className='nav-item mx-2 align-self-center'>
              <a href='#aboutMe' className='nav-link'>
                About me
              </a>
            </li>
            <li className='nav-item mx-2 align-self-center'>
              <a href='#projects' className='nav-link'>
                Projects
              </a>
            </li>
            <li className='nav-item mx-2 align-self-center me-auto navBreakingPoint'>
              <a href='#contactMe' className='nav-link'>
                Contact me
              </a>
            </li>
            <li className='nav-item align-self-center '>
              <a
                href='https://github.com/vdomi92'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-github'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
