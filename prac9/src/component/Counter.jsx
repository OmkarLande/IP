import {useState} from 'react'


function Counter(){

    const [count , setCount] =useState(0);

    function increment(){
        setCount(count => count +1 )
    }
    function decrement(){
        setCount(count => count -1 )
    }

    return(
        <div>
            <button onClick={increment}>+</button>
            <div>{count}</div>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;