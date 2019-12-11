import React,{Component} from 'react';
import logo from '../../logo.svg';
import { NavLink as Link } from 'react-router-dom'
import './style.scss'

export default class Menu extends Component{
    
    constructor(){
        super()
        this.state = {flag:false};
        this.change = ()=>{
            this.setState ({
                flag :!this.state.flag
            })
        }
        this.fn()
    }
    fn(){
        window.addEventListener('hashchange', () => {
            this.setState({
                flag:false
            })
           })
    }
    render(){
    return (
    <div className="w-100 flex bg-myblack  ai-center mymenu" >
        <span onClick={this.change} className="pl-3 iconfont icon-oacute iconmenu"></span>
        <img alt=""  src={logo} className="logo ml-4"></img>
        <div className="color-myblue pr-5 size-4"> React</div>
        <ul className="menu li-none flex w-100  size-4 color-mywhite ai-center pr-2 weight-lighter">
            <li className="pr-5 weight-lighter menua"><Link to="/index" activeClassName="selected">基本使用</Link></li>
            <li className="pr-5 weight-lighter"><Link to="/router" activeClassName="selected">路由</Link></li>
            <li className="pr-5 weight-lighter"><Link to="/components" activeClassName="selected">组件</Link></li>
            <li className="pr-5 weight-lighter"><Link to="/life" activeClassName="selected">生命周期</Link></li>
        </ul>
        <div className="color-mywhite pr-5"><a href="https://github.com/Buzz888/buzz888.github.io">Github</a></div>
        <div className={this.state.flag?'modle-menu bg-myblack':'nomenu'}>
            
        <ul className="li-none w-100  size-4 flex column color-mywhite ai-center pr-2 weight-lighter">
            <li className="py-4 weight-lighter"><Link to="/index" activeClassName="selected">基本使用</Link></li>
            <li className="pb-4 weight-lighter"><Link to="/router" activeClassName="selected">路由</Link></li>
            <li className="pb-4 weight-lighter"><Link to="/components" activeClassName="selected">组件</Link></li>
            <li className="pb-4 weight-lighter"><Link to="/life" activeClassName="selected">生命周期</Link></li>
            <li className="pb-4 weight-lighter"><Link to="/elem" activeClassName="selected">案例</Link></li>
            <li className="pb-4 weight-lighter"><a className="color-myblue" href="https://react.docschina.org/">React</a></li>
            <li onClick={this.change} className="pb-4 color-myhui guan weight-lighter">X</li>
        </ul>
            
        
        </div>
    </div>
    )
}
}