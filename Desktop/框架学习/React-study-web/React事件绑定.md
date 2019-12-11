## React事件绑定
1. React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
2. 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。  

### React 
```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```
>React内部是通过this.state变量来维护内部状态，并通过this.stateState来修改状态

```
定义变量:
this.state = {num:1}
修改变量状态:
this.setState({
num:this.state.num+1
})
```
>其他变量不写则不会改变局部修改

React阻止默认行为是通过preventDefault

 在事件添加e.preventDefault();
 
###React三元表达式和布尔值的使用
```
className={this.state.flag ? 'open btn' : 'close btn'}
flag:!this.state.flag
```
###向事件处理程序传递参数
```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
```
