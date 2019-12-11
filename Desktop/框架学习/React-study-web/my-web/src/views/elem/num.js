import React,{Component,createContext} from 'react'
import Myredux from './redux'
const{
    Provider,
    Consumer:CounterConsumer //=>解构再赋值
} = createContext()
// =>context
class ConuterProvider extends Component{
    constructor(){
        super()
        this.state = {
            count:100
        }
    }
    incrementCount =()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    decrementCount =()=>{
        this.setState({
            count:this.state.count - 1
        })
    }
    render(){
       return( <Provider value={{
           count:this.state.count,x:1,
           onincrementCount:this.incrementCount,
           ondecrementCount:this.decrementCount}}>
        {this.props.children}
        </Provider>)
    }
}

class Counter extends Component{
     render(){
         return(
             <CounterConsumer>
                 {
                 (arg)=>{
                    //  console.log(arg)
                     return <span>{arg.count}</span>
                 }}
             </CounterConsumer>
             
         )
     }
 }
 class CountBtn extends Component{
     render(){
         return(
        <CounterConsumer>
            {
                ({onincrementCount,ondecrementCount})=>{
                   const  handler = this.props.type ==='increment'?onincrementCount:ondecrementCount
                    return(
                    <button onClick={handler}>{this.props.children}</button>
                    )
                }
            }
        </CounterConsumer>
         
         )
     }
 }
// =>redux
export default class Num extends Component{
    render(){
        return(
        <div className="itemelem mt-5">
            <h1 className="size-5">计数器的组件通信</h1>
            <h3 className="color-myhui ml-2">*Context Api</h3>
            <ConuterProvider>
            <CountBtn type="decrement">-</CountBtn>
            <Counter></Counter>
            <CountBtn type="increment">+</CountBtn>
            </ConuterProvider>
            <h3 className="color-myhui ml-2">*Redux 使用</h3>
            <Myredux></Myredux>
        </div> 
        )
        
    }
}