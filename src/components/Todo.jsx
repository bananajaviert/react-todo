import React from 'react'

const Todo = ({ text, todo, todos, set_todos }) => {
    const delete_handler = () => {
        set_todos(todos.filter(item => {
            return item.id !== todo.id
        }))
    }

    // const completed_handler = () => {
    //     const found = todos.some(item => {
    //         return item.id === todo.id
    //     })

    //     set_todos(todos.map(todo => {
    //         if(found) {
    //             return {
    //             ...todo, completed: !todo.completed
    //             }
    //         }
    //         return todo

    //     }))
    // }

    const completed_handler = () => {
        set_todos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed && 'completed'}`}>{text}</li>
            <button onClick={completed_handler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={delete_handler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo
