import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, set_todos, filtered_todos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filtered_todos?.map(todo => (
                        <Todo 
                            set_todos={set_todos}
                            todos={todos}
                            key={todo.id}
                            todo={todo}
                            text={todo.text}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList
