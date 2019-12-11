import React, { useState,useEffect} from 'react'
import val from './val'
import Editor from 'for-editor';
import './style.scss'
export default function Hookcom(){
    const [count,setCount] = useState(0)
    const [ary] = useState(['hello React','hello Vue','hello Angular'])
    const [counts,setCounts] = useState(0)
    // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `${ary[counts]}`;
  });
    return(
    <div >
     <Editor preview="true" height="75vh" toolbar="" lineNum="false" value={val} onChange={() => this.handleChange()} />
    <div className="hookstyle flex jc-center ai-center wrap">
    <div className="itemhook"><h3>这是第一个hook</h3>
    <p>You Click {count} times</p>
    <button className="listenclick" onClick={()=>setCount(count +1)}>
        Click me
    </button></div>
    <div className="itemhook">
     <h3>useEffect点换标题</h3>
     <p>You title {ary[counts]} </p>
    <button className="listenclick" onClick={()=>setCounts(counts<2?counts +1:0)}>
        点击切换title
    </button>
    </div>
    </div>
    </div>)
}