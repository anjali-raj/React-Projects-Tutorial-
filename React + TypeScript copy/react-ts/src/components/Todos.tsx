import React, {useContext} from 'react';
//import Todo from '../models/todo';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import Classes from './Todos.module.css';

//FC = Functional Component
const Todos : React.FC = () => {
    const todosCtx = useContext(TodosContext);
    return (
        <ul className={Classes.todos}>
            {todosCtx.items.map((item) => (
            <TodoItem 
              key={item.id} 
              text={item.text} 
              onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
            />
            ))}
        </ul>
    )
}

export default Todos;
