import React,{Component} from 'react'
import Logo from '../images/logo.svg'
import '../css/header.css'

class Header extends Component {
    state={
        change:'change',
        isActive:false
    }
    _handleToggle(){
        this.setState({
            isActive:!this.state.isActive
        })
    }    
    render(){
        const {isActive ,change } = this.state
        return (
        <header className="container">
            <div className="left-header">
            <div><img src={Logo} alt="Logo"/></div>
            </div>
            <div className={isActive ? 'right-header visible' : 'right-header hidden'}>
            <nav>
                 <ul>
                     <li><a href="#">Features</a></li>
                     <li><a href="#">Pricing</a></li>
                     <li><a href="#">Resources</a></li>
                 </ul>
             </nav>
             <div className="menu-line"></div>
            <div className="buttons">
                 <a href="#">Login</a>
                 <button className="btn">Sign up</button>
             </div>
            </div>
            <div className={isActive ? change + " " + 'hamburger' : 'hamburger'} 
                 onClick={()=>this._handleToggle()}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </header>
    )   
}
}

export default Header