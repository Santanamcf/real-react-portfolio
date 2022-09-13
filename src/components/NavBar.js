import React from "react";
import Link from "react";

function NavBar(){
    return(
        <header>
            <div className="container">
                <Link to ="/">
                    <h1>My Portfolio</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/About">About</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/Home">Home</Link>
                        <Link to="/Portfolio">Portfolio</Link>
                        <Link to="/Resume">Resume</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;