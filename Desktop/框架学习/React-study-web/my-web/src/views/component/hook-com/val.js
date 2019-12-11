export default `
## Hook
1. Hook可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
2. 为什么会有hook？  

>在组件之间复用状态逻辑很难,复杂组件变得难以理解


\`\`\`
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。 0表示赋予的值
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`
>useState 就是一个 Hook,通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。 
## Effect Hook
useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。（我们会在使用 Effect Hook 里展示对比 useEffect 和这些方法的例子。）
`