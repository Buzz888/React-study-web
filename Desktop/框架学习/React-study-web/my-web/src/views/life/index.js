import React,{Component} from 'react'
import Editor from 'for-editor';
import val from './val.js';
import img from './life.png'
import './style.scss'
export default class Life extends Component{ 
    constructor(){
        super();
        console.log('constructor')
        this.state ={
            title:'hello react'
        }
        this.click=() => {
            this.setState({
                title:'oh hhhh!'
            })
        }
        setTimeout(() => {
            this.setState({
                title:'oh my gald!'
            })
        }, 2000);
    }
    render(){
        console.log('render')
    return(<div className="item-md">
        <h1 onClick={this.click}>{this.state.title}</h1>
        <Editor preview="true" height="75vh" toolbar="" lineNum="false" value={val} onChange={() => this.handleChange()} />
        <div >
            <img className="lifeimg" alt="" src={img}></img>
        </div>
        
        </div>)
        }
        componentDidMount(){
            console.log('componentDidMount')
        }
        componentDidUpdate(){
            console.log('componentDidUpdate')
        }
       
}