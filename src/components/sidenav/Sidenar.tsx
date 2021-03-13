import React from 'react';
import './Sidenav.css';

interface Props {
    
}

const Sidenav = (props: Props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                <img src={process.env.PUBLIC_URL + "/react-icon.svg"} alt="" width="30" height="24" className="d-inline-block align-top mr-3"></img>
                    Gifs react app
                </a>
            </div>
        </nav>
    )
}

export default Sidenav
