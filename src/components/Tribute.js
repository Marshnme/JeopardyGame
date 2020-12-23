import React from 'react';
import './tribute.css';

const Tribute = () => {
    return(
        <div className="wrapper">
            <div className="main">
                <div className="quote">
                    <img alt="alex trebek" href="#"></img>
                    <h2>"I don't spend any time whatsoever thinking about what might have been."</h2>
                </div>
                 <div className="sign">
                    <p>- Alex Trebek</p>
                </div>
            </div>
        </div>
        
    );
}

export default Tribute;