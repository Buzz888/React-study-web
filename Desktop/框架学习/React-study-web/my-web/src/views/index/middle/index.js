import React, { Component } from 'react';
import Editor from 'for-editor';
import val from './val.js';
import './style.scss'
export default class Firstindex extends Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            num:1,
            text:null,
            flag:true
          }
        this.onclick =()=>{this.setState({num:this.state.num+1})}
        this.handleClick=(e)=>{e.preventDefault();this.setState({text:'<a>无跳转'})}
        this.handleClick2=()=>{this.setState({flag:!this.state.flag});}
    }
    render() {return(
        <div className="listen">
        <Editor style={{width:'90%'}} className="listenmd" preview="true" height="75vh" toolbar="" lineNum="false" value={val} onChange={() => this.handleChange()} />
        <div className="addlisten">
         <button type="button" className="listenclick" onClick={this.onclick}>ClickChange</button>
        <div className="size-5">{this.state.num}</div>
        <div className="guodu"></div>   
        <a href="https://github.com/Buzz888/buzz888.github.io" className="color-myblack" onClick={this.handleClick}>
        Click me
        </a>
        <div className="weight-bolder">{this.state.text}</div>
        <div className="guodu"></div>   
        <div>
           <div onClick={this.handleClick2} className={this.state.flag ? 'open btn' : 'close btn'}></div>

        </div>
        </div>
        </div>
        
    )}
}