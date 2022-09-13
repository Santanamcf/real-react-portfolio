import React from "react";

function NavBar({ currentPage, handlePageChange }) {
    return (
        <ul class="p-3 mb-2 bg-dark text-white" className='nav nav-tabs'>
            <li className='nav-item'>
                <a 
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>
            </li>
            <li className='nav-item'>
                <a 
                href="#about-me"
                onClick={() => handlePageChange('About Me')}
                className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
            <li className='nav-item'>
                <a 
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className='nav-item'>
                <a 
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className='nav-item'>
                <a 
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>

        </ul>
    )
}

export default NavBar;