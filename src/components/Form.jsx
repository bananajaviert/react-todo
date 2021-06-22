import React from 'react'
import Swal from 'sweetalert2'

const Form = ({ input_text, set_input_text, todos, set_todos, set_status }) => {
    // const input_text_handler = e => {
    //     set_input_text(e.target.value)
    // }

    const submit_todo_handler = e => {
        e.preventDefault()

        if(!input_text) {
            return Swal.fire({
                        icon: 'warning',
                        text: 'Please enter text'
                    })
        }

        set_todos([...todos, {
            id: Math.floor(Math.random() * 10000),
            text: input_text,
            completed: false
        }])
        
        set_input_text('')
    }

    // const status_handler = e => {
    //     set_status(e.target.value)
    // }

    return (
        <>
        <form>
            <input value={input_text} onChange={e => set_input_text(e.target.value)} type="text" className="todo-input" />
            <button className="todo-button" type="submit" onClick={submit_todo_handler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={e => set_status(e.target.value)} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        </>
    )
}

export default Form
