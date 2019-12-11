import React from 'react';
import List from './list'
import Num from './num'
export default function(){
    return (
    <div className="flex wrap ml-4">
        <h1 className="p-3">这是React一些案例</h1>
        <div className="guodu"></div>
        <List></List>
        <Num></Num>
    </div> 
    
    
    )
}