export default `
## React Router
web:  
npm install react-router-dom 安装路由模块  
1.路由的挂载  

\`\`\`
index.js:引入路由模块选择路由模式
BrowserRouter as Router&HashRouter as Router
一个带#号一个不带 后者兼容性更好
import {HashRouter as Router ,Route} from 'react-router-dom'
render函数添加路由匹配
<Router>
<Route component={App}></Route>
</Router>

\`\`\`
2.开始使用路由

\`\`\`
import {Router,Route,Link} from 'react-router-dom'
Link/NavLink用于路由跳转
<Link to="./index"></Link>
<NavLink>可用为link添加样式如activeClassName="selected"
activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
  \`\`\`
3.路由的渲染
>exact 用于不完全匹配适用于页面动态路由渲染使用

\`\`\`
component/render渲染路由组件 render可以传值
<Route render={(routerprops)=>{return <Index {...routerprops} x={1}></Index>}}></Route>

<Router> 
<Route component={Index} path="/index/"></Route>
<Route render={()=><div></div>}></Route>
</Router>
动态传值:
this.props.match.params.id
\`\`\`
>路由重定向
>> \`\`\`
>>  <Switch><Redirect to="/index" from="/"/><Switch>
>> 404
>> <Switch>
>> <Redirect to="/404"/>
>> <Redirect to="/index" from="/" exact/>
>> <Switch>
>> \`\`\`

#### 路由传值的三种方式  
1. :id =>this.props.match.params.id  
2. ?from=artical  
3. {{pathname:'/index',state:{id:1}}}
   
#### 路由跳转的方式
this.props.history.push('/home') 支持上面路由传值

>没有用router渲染的组件需要通过withRouter()包起来调用props的方法

### 监听路由变化的各种方式
1.原生方法
>window.addEventListener('hashchange', () => {})  
>监听hash的路由变化

2.Redux store中subscriptions监听路由的变化  
3
>componentWillUpdate(nextProps) {
    if (this.props.location !== nextProps.location) {
      // 路由变化
    }
}
`