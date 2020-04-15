import React, {useReducer} from 'react';
import './App.css';
import {reducer, initialState} from "./reducers/reducer"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"




function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(App)

  //need to set up my dispatch and then pass into the components

const toggelTask = (task) => {
  dispatch({type: "TOGGLE_TODO", payload: task})
}

const addTask = (add) => {
  dispatch ({type: "ADD_TODO", payload: add})
}

const clearFinished = (event) => {
  event.preventDefault()
  dispatch ({type: "CLEAR_TODO"})
}
  



  return (
    <div className="App">
    <TodoForm addTask={addTask}/>
    <TodoList toggelTask = {toggelTask} {...state} clearFinished={clearFinished}/>
    </div>
  );
}

export default App;
