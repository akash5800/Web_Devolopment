 import AppName from "./components/AppName.jsx";
 import AddTodo from "./components/AddTodo.jsx";
 import"./App.css";
import TodoItems from "./components/TodoItems.jsx";

function App() {
const todoItems=[
    {
name:"Buy Milk",
dueDate:"4/10/2023",
},
{
  name:"Go to college",
  dueDate:"4/10/2023",
},
{
  name:"Like this video",
  dueDate:"right now",
},
 ];
  return(
    <>
     <center className='todo-container'>
     <AppName/>
     <AddTodo/>
     <TodoItems todoItems={todoItems}></TodoItems>
      
</center>
     </>
  )
 }
export default App
