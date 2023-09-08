
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'

function App() {
  function handleClick(){
    alert('button cicked')
  }
  const handleClick2 = () =>{
    alert('button clicked again')
  }
 const addToFive = ( num) => {
  alert(num + 5)
 }
  return (
    <>
    {/* <Users></Users> */}
      <h3>React core concept exploring part 2</h3>
      <Friends></Friends>
      <Friend></Friend>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me again</button>
      <button onClick={()=>{alert('you clicked a onclick event handler in line')}}>click me for the onClick checker</button>
      <button onClick={()=>addToFive(5)}>clicked to  addFive</button>
      
    </>
  )
}

export default App
