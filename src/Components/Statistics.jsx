import React from 'react'
import ShortenLinks from './ShortenLinks'
import recognition from '../images/icon-brand-recognition.svg'
import records from '../images/icon-detailed-records.svg'
import custom from '../images/icon-fully-customizable.svg'
import '../css/statistics.css'

const Statistics = () => {
    return(
        <div className="statistics">
            <ShortenLinks/>
            <div className="stat-header">
                <h1>Advanced Statistics</h1>
                <p>
                    Track how yoru link are performing 
                    across the web with our advanced statistics dashboard
                </p>
            </div>
            <div className="line container"></div>
            <div className="body-card-container container">
                <div className="body-card top">
                    <div className="body-img">
                        <img src={recognition} alt=""/>
                    </div>
                    <h3>Brand Recognition</h3>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className="body-card">
                    <div className="body-img">
                        <img src={records} alt=""/>
                    </div>
                    <h3>Detailed Records</h3>
                    <p>
                       Gain insights into who is clicking your links. Knowing when and where 
                       people engage with your content helps inform better decisions.
                    </p>
                </div>
                <div className="body-card bottom">
                    <div className="body-img">
                        <img src={custom} alt=""/>
                    </div>
                    <h3>Fully Customizable</h3>
                    <p>
                        Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Statistics