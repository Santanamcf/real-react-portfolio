import React, { useState } from 'react';
import NavBar from './NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About Me') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    }
    const handlePageChange = (page) => setCurrentPage(page);
    return(
        <div>
            <NavTabs className='Nav' currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}