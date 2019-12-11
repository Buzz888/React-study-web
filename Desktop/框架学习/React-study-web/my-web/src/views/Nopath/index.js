import React,{Component} from 'react'
import logo from '../../logo.svg';
import './style.scss'
export default class Nopath extends Component{
    render(){
        return(
    <div className="w-100 h-100 titlepath bg-myblack flex jc-center">
        <img src={logo} className=" App-logo " alt="logo" />
        <h1 className="Nopath">Is Nopath 404</h1>
    </div>
    
        )
    }
}