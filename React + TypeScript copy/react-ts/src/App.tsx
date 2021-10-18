//import React, {useState} from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';
//import Todo from './models/todo';

function App() {
 

  return (
    <TodosContextProvider >
      {/* <NewTodo onAddTodo ={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/> */}
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
