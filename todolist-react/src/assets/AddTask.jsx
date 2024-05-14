import { useState } from "react"

const AddTask = ( {addTask} ) => {

    const sub = {
        backgroundColor:'black',
        width:'100%',
        color:'white',
        fontWeight:'bold',
        height:'2.5rem',
        fontSize:'1rem',
        borderRadius:'5px',
        marginTop:'20px',
        border:'none',
        cursor:'pointer'
    }

    const [text,setText] = useState('');
    const [reminder,setReminder] = useState(false);
    const [day,setDay] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert("Please Add Text!")
            return
        }
        addTask({text,day,reminder})
        setDay('')
        setText('')
        setReminder(false)
    }


  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" placeholder='Adicionar Atividade' value = {text} onChange={(e)=>setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="">Data e Hora</label>
        <input type="text" placeholder='Dia e Hora' value={day} onChange={(e)=>setDay(e.target.value)}/>
      </div>
      <div className="form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" style={sub} value="Salvar Atividade" />
    </form>
  )
}

export default AddTask
