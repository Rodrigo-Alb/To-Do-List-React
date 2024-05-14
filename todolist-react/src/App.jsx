import Header from './assets/Header'
import Tasks from './assets/Tasks'
import AddTask from './assets/AddTask'
import { useState } from 'react'

function App() {
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id,...task}

    setTasks([...tasks, newTask])
  }

  const toggleReminder = (id) =>{
    setTasks(tasks.map( (task) => task.id === id? {...task , reminder:!task.reminder}: task))
  }

  const [showAddTask,setShowAddTask] = useState(true);

  const [tasks,setTasks] = useState([
    {
      id:1,
      text:"Lavar a Louça",
      day:"15th feb",
      reminder:true  
    },
    {
      id:2,
      text:"Lavar o Banheiro",
      day:"15th feb",
      reminder:true  
    }
    ])
  return (
      <div className='container'>
         <Header onAdd = {()=> setShowAddTask(!showAddTask)} showAddTask = {showAddTask} />
         {showAddTask && <AddTask addTask = {addTask} />}
          {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder} />:("Não há atividades para serem feitas") }
      </div>
  )
}

export default App
