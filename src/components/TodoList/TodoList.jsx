import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './todoList.css';

const TodoList = ({ todos, setTodos, deleteTask }) => {

  const updateTask = (id) => {
    let updatedTasks = todos.map((todo) => {
        if(todo.id === id) {
            todo.completed = !todo.completed;
            return todo
        } else {
            return todo
        }
    });

    setTodos(updatedTasks)
  }

  return (
    <div className='todolist-container'>
        <div className='todos-container'>
            <div>
                {
                    todos.map((todo, index) => (
                        <div 
                           className={`todo-item ${todo.completed && "todo-item-active"}`}
                           onDoubleClick={() => updateTask(todo.id)}
                        >
                           <p className='flex'>{todo.task} <FaTimes onClick={() => deleteTask(todo.id)} className='cancel-btn' size={20}/></p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TodoList;
