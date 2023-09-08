import { useState } from "react"

export default function Counter (){
    const [count,setCount] = useState(0);
    const handleAdd=()=>{
        const newCount =  count+1;
        setCount(newCount)
    }
    const handleReduce=()=>{
        const newCount =  count-1;
        setCount(newCount)
    }
    return(
        <div style={{borderRadius:'60px',
        border: '2px solid yellow'}}>
            <h3>counter:{count}</h3>
            <button style={{'background-color':'yellow'}}
             onClick={handleAdd}>Add</button>
            <button style={{'background-color':'yellow'}}
             onClick={handleReduce}>Reduce</button>
        </div>
    )
}