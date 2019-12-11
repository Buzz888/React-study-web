import React,{Component} from 'react';
import Editor from 'for-editor';
import val from './val'
export default class Myrouter extends Component{
    render(){
        return (<div className="item-md"><Editor preview="true" height="85vh" toolbar="" lineNum="false" value={val} onChange={() => this.handleChange()} /></div>)
    }

} 