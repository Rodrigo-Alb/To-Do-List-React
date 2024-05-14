import Button from "./Button"

const Header = ({onAdd, showAddTask}) => {
  return (
    <div className='header'>
      <h1>Task Tracker</h1>
    <Button onClick = {onAdd} color={showAddTask?'red':"green"} text= {showAddTask? "Esconder": "Mostrar"}/>
    </div>
  )
}

export default Header
