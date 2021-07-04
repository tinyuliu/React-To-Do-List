import React, {useState} from 'react';

function ToDoItem (props) {
    const [isDone, setIsDone] = useState(false);

    function handleClick(event) {
        setIsDone(!isDone);
    }

    return <li style={{textDecoration: isDone && "line-through"}} onClick={handleClick}>{props.toDoItem}</li>
}

export default ToDoItem;