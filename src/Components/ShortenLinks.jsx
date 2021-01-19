import React, { Component } from 'react'
import '../css/shortenLinks.css'
import '../css/card.css'
import copy from "copy-to-clipboard"; 

class ShortenLinks extends Component {
    state={
        shortenLink:'',
        btnID:'',
        result:[],
        isCopied:false,
        btnCopy:'var(--very-dark-blue)',
        isEmpty:false
    }

    handleSubmit=(event)=>{
        if(this.state.shortenLink===""){
            this.setState({
                isEmpty:true
            })
            setTimeout(()=>{
                this.setState({isEmpty:false})
            },3000)
            event.preventDefault()
        }else{ 
            fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.shortenLink}`)
            .then(response=>response.json())
            .then(response=>{
                if(response.ok){
                    this.setState({
                        result: [...this.state.result, response.result],
                        shortenLink:''
                    })
                }else{
                    console.log('Try again or try another link')
                }
            })
            .catch(err=>console.log(err))
            event.preventDefault();
    }
    }

    handleChange=(e)=>{
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
        e.preventDefault();
    }
    
    handleCopy=(item,id)=>{
        copy(item)
        this.setState({
            isCopied:!this.state.isCopied,
            btnID:id
        })
        setTimeout(()=>{
            this.setState({
                isCopied:!this.state.isCopied
            })
        },3000)
    }

    render() {
        const {isCopied,btnCopy,isEmpty,btnID} = this.state
        let ui = this.state.result.map(item=>(
            <div className="card" key={item.code}>
                <p className="orginal">{item.original_link}</p>
                <div className="left">
                    <p className="short">{item.full_short_link}</p>
                    <button 
                        className="btn" 
                        onClick={()=>this.handleCopy(item.full_short_link,item.code)}
                        style={{backgroundColor: isCopied && btnID === item.code ? btnCopy : null}}
                    >
                        {isCopied && btnID === item.code ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
        ))
        return (
            <div className="shorten-container container">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="shortenLink"
                        value={this.state.shortenLink}
                        onChange={this.handleChange}
                        placeholder="Shorten a link here"
                        className={isEmpty ? 'isEmpty' : null}
                    />
                    <button className="btn">Shorten it!</button>    
                 </form>         
                 <span 
                    className={isEmpty ? 'error-msg true' : ' error-msg false'}>
                    Please add a link</span>
                 {ui}
            </div>
        )
    }
}

export default ShortenLinks
