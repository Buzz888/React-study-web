export default `
## 函数组件
函数组件特点  
1. 简单 渲染快速 组件一被调用 里面内容渲染完成，当前组件内部信息基本不改变
>除非重新调用则会改变组件内容 

2.没有state状态管控随时变化的内容 也没有生命周期

### 使用
\`\`\`
import React from 'react' =>用经过react渲染必须引入
export default function component(props){
return(<div>hello react</div>)
}
\`\`\`
### props传参方式
>插槽:props.children[0] =>指定传某个索引值
>调用React.Children.map(值,callback)
>>React.Children.map(props.children,(item,index){return {item}})
`