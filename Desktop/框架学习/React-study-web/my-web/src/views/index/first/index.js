import React from 'react';
import Editor from 'for-editor';
import val from './val.js';
export default function Firstindex(){
    return (
        <div><Editor preview="true" height="75vh" toolbar="" lineNum="false" value={val} onChange={() => this.handleChange()} /></div>
        
    )
}