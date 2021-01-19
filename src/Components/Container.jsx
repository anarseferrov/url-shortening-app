import React from 'react'
import Boost from './Boost'
import Footer from './Footer'
import Header from './Header'
import HeaderInfo from './HeaderInfo'
import Statistics from './Statistics'

function Container() {
    return (
        <div>
            <Header/>
            <HeaderInfo/>
            <Statistics/>
            <Boost/>
            <Footer/>
        </div>
    )
}

export default Container