import { useState } from "react"

export default function Team  (){
    const [team,setTeam]=useState(11)
    const handleAdd = () =>{
        const newTeam   = team + 1 ;
        setTeam(newTeam)
    }
    const handleRemove = () =>{
         
        setTeam(team - 1)
    }
    const teamStyle ={
        border: '2px solid yellow',
        borderRadius :'4px',
        padding : '15px',
        margin : '15px'
    }
    return(
        <div style={teamStyle}>
        <h3>player:{team}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        </div>
    )
}