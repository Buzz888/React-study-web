import React,{Component} from 'react';
import { NavLink as Link,Route,Switch,Redirect} from 'react-router-dom'
import Fnccom from './fnc-com/index'
import Classccom from './class-com/index'
import Hookcom from './hook-com/index'
export default class Index extends Component{
      render() {
        return <div className="item-md ">
            <div className="tab-title bg-myblack py-3 flex jc-sa">
                <Link to="/components/index" activeClassName="titleselected">[函数组件]</Link>
                <Link to="/components/class" activeClassName="titleselected">[Class组件]</Link>
                <Link to="/components/hook" activeClassName="titleselected">[Hook组件]</Link>
            </div>
            <Switch>
            <Route component={Fnccom} path="/components/index"></Route>
            <Route component={Classccom} path="/components/class"></Route>
            <Route component={Hookcom} path="/components/hook"></Route>
            <Redirect to="/components/index" from="/components" exact></Redirect>
            <Redirect to="/404"></Redirect>
            </Switch>
            
            </div>
      }
    }