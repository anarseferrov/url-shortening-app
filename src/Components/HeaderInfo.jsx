import React from 'react'
import '../css/headerInfo.css'
import bg from '../images/illustration-working.svg';

const HeaderInfo=()=>{
    return(
        <div className="headerInfo container">
            <div className="info">
                <h1>More than just shorter links</h1>
                <p>
                   Build your brand's recognition and get 
                   detailed insights on how your links are performing
                </p>
                <button className="btn">Get Started</button>
            </div>
            <div className="img">
                <img src={bg} alt="Illustration"/>
            </div>
        </div>
    )
}

export default HeaderInfo