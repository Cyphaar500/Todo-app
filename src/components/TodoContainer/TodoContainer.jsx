import React, { useState } from 'react'
import Header from '../Header/Header';
import AddInput from '../AddInput/AddInput';
import TodoList from '../TodoList/TodoList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([])

  const deleteTask = (id) => {
    const todo = todos.filter(todo => todo.id !== id);
    setTodos(todo); 

  }

  return (
    <div className='todo-container'>
      <div className='header'>
        <Header title='Todo' />
      </div>
      <div>
        <AddInput 
            todos={todos} 
            setTodos={setTodos}
        />
        <TodoList
            todos={todos}
            setTodos={setTodos}
            deleteTask={deleteTask}
        />
      </div>
    </div>
  )
}

export default TodoContainer;
