import React from 'react'
import val from './val'
import Editor from 'for-editor'
export default function Classcom(){
    return(<div><Editor preview="true" height="75vh" toolbar="" lineNum="false" value={val} onChange={() => this.handleChange()} /></div>)
}