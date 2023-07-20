import React , { useEffect } from "react";

function App() {
  const [todos , setTodos] = React.useState([{
    title : "Go to gym",
    discription : "hit the gym",
    id : 1
  }, 
  {
    title : "Go gymming ",
    discription : "heavy gymming",
    id : 2
  }]);

  return (
     <div>
        {todos.map( (todo) => {
          return <Todo title= {todo.title} discription={todo.discription}></Todo>
        })}
     </div>
  )
}


function Todo(props){
  return <div>
    {props.title},
    {props.discription}
  </div>
}

export default App
