import React from 'react';
import Classes from './TodoItem.module.css';

const TodoItem: React.FC<{text: string; onRemoveTodo : () => void }> = (props) => {
    return <li className={Classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
};
export default TodoItem;