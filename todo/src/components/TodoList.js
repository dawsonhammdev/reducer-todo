import React from "react"
import Todo from "./Todo"

const TodoList = ({todo, toggelTask}) => {
    return (
        <div>
            {todo.map(item => {
                return <Todo key = {item.id} {...item} toggleItem = {toggelTask} />;
            }
                
            )}
        </div>
    )
}

export default TodoList