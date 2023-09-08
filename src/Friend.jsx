export default function Friend({friend}){
    console.log(friend)
    
    return(
        <div className="friends">
            <h3>here are my friends</h3>
            <p>Name:{}</p>
            <p>Email:{}</p>
        </div>
    )
}