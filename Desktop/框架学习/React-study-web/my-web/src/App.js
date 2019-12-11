import React,{Component} from 'react';
import Menu from './component/menu/menu' //菜单组件
// import Lefttab from './component/left-tab/index'
// import render from 'react-dom';
import {HashRouter as Router ,Route,Switch,Redirect} from 'react-router-dom'
import {Index,Myrouter,Nopath,Components,Life,Elem} from './views/index'
export default class App extends Component{
    render(){
        return(
            <div>
            <Menu></Menu>
            <div style={{marginTop:'60px'}}>
                
                <Router>
                <Switch>
                <Route component={Index} path="/index"></Route>
                <Route component={Myrouter} path="/router"></Route>
                <Route component={Components} path="/components"></Route>
                <Route component={Life} path="/life"></Route>
                <Route component={Elem} path="/elem"></Route>
                <Route component={Nopath} path="/404"></Route>
                <Redirect to="/index" from="/" exact/>
                <Redirect to="/404" />
                </Switch>
                
                </Router>
            </div>
            </div>
        )
    }
}
