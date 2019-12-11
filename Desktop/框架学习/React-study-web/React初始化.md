## React初始化
###MVC框架
>什么是MVC框架？
>>view 视图 model 数据 controll 控制层

React完成监听数据的更新,数据更新帮助我们去渲染视图,将虚拟dom渲染为真实dom
###与vue区别
视图更新并不会改变数据mvc是单向  
需要更新数据需要在controll单独处理

### React基本使用
>ReactDOM.render( [ jsx ] , [ container ] , callback )=>jsx:语法 container:节点

使用要点:   
1.  JSX语法基于{}绑定动态数据 Null underfined 为空 不渲染  
2.  在括号不能使用引用类型值除了数组 即对象/函数/newDate/正则等  
3. className = class style={{color:'blue'}}  
4. 三元运算符的使用
```
<h1>{sex===0?'男':'女'}</h1>
{sex===0?<p>hello</p>:null}
```
5. 渲染多列表 遍历数组或者对象
必须要有返回值的方法才可以使用如map filter,foreach for不可使用
```
{data.map(i=>
<li key={i.id}>
        <span>{i.id}:</span>
        <span>{i.name}</span>
</li>)}
```
>必须要有key因为虚拟dom会就地复用从而提高dom渲染速度  

6.JSX本质上就是转换为React.createElement在React内部构建虚拟Dom，最终渲染出页面  
7.虚拟dom转换格式
>React.createElement("div", null, "hello", React.createElement("div", null, React.createElement("h1", null)));

转换为:
>>{
  $$typeof:Symbol(react.element),
  key:null,
  ref:null,
  type:标签名/组件,
  props:{
    xxx:xxx //=>给元素标签设置属性(REF/KEY除外)
    //=>没有子节点则没有children有子节点才有children
}}
8. 