import React,{ useState }  from 'react'
import './style.scss'
export default function List(){
    const [state, setState] = useState(['hello Vue','hello React','hello Bootstarp']);
    const [val, setVal] = useState('');
    let inp = '';
    
     return(
     
        <div className="itemelem">
         <div className="mt-5 flex ai-center jc-center">
         <input value={val} onChange={(e)=>{inp=e.target.value;return setVal(x=>inp)}} type="text" className="addinp"></input>
         <button  onClick={() => setState(x => {let val1 = val;setVal(x=>'') ;return val1===''?[...x]:[...x,val1];})} className="listenclick ml-4">添加到列表</button>
         </div>
         <ul className="listitem">
         <h3 className="color-myhui ml-2">*列表点击单个可删除</h3>
         {state.map((i,index)=>{return<li onClick={()=>setState(x=>{let ary = x; ary.splice(index,1) ;console.log(ary) ;return [...ary]})} key={index}>{i}</li>})}
         </ul>
        </div>
   
     )
}