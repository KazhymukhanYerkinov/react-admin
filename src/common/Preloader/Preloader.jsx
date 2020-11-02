import React from 'react';
import './PreloaderModule.css';


const Preloader = () => {
    return (
        <div className = 'app-preloader'>
            <svg width="100%" height="200px" viewBox="500 0 500 500"> 
                <rect x="0" y="0" width="100px" height="10" fill="#7E98AE"> 
                    <animate attributeName="x" from="0"  to='1000' dur="0.4s" repeatCount="indefinite" />
                    <animate attributeName="width" to="500" dur="0.3s" repeatCount="indefinite" />
                    <animate attributeName="fill" to="black" dur="0.3s" repeatCount="indefinite" />
                </rect> 
	        </svg>
        </div>
    )
}

export default Preloader;