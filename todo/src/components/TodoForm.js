import React, {useReducer, useState} from 'react';
import {reducer, initialState} from "../reducers/reducer"




function TodoForm( {addTask, clearFinished} ) {

    
    // const [text, setText] = useReducer(reducer, initialState)

    const [todo, setTodo] = useState('')

    const handleChanges = e => {
        e.preventDefault();
        setTodo(e.target.value);
      };

    // const addNewTodo = (task) => {
    //   dispatch({type: "ADD_TODO", payload: task})
    // }

    const onFormSubmit = e => {
        e.preventDefault();
        addTask(todo);
        
      };

    
        return (
          <div onSubmit={onFormSubmit}>
          <form>
            <label> New Task </label>
            <input 
            name= 'input-task'
            placeholder="I need to..."
            onChange={handleChanges}
            type = 'text'
            value= {todo}
            />
            <button type ='submit'>
            Add
            </button>
            <button onClick = {clearFinished} >
              clear
            </button>
          </form>
          </div>
        );
     }

export default TodoForm