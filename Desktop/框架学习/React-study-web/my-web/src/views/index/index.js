import React,{Component} from 'react';
import Firstindex from './first/index'
import Listen from './middle/index'
import { NavLink as Link,Route,Switch,Redirect} from 'react-router-dom'
export default class Index extends Component{
      render() {
        return <div className="item-md ">
            <div className="tab-title bg-myblack py-3 flex jc-sa">
                <Link to="/index/first" activeClassName="titleselected">[React原理]</Link>
                <Link to="/index/listen" activeClassName="titleselected">[React事件]</Link>
            </div>
            <Switch>
            <Route component={Firstindex} path="/index/first"></Route>
            <Route component={Listen} path="/index/listen"></Route>
            <Redirect to="/index/first" from="/"/>
            </Switch>
            </div>
      }
    }