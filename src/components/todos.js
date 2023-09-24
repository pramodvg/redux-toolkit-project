import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {
    const todos = useSelector(state => state.todos)

    return (
        <div>
            <div>Todos</div>
            {
                todos.map((todo) => (
                    <div key={todo.id}>{todo.text}</div>
                ))
            }
        </div>
    )
}

export default Todos
