import React, {useState} from 'react';

function ToDoItem (props) {
    const [isDone, setIsDone] = useState(false);
    const [isOver, setIsOver] = useState(false);

    function handleClick(event) {
        setIsDone(!isDone);
    }

    function handleMouseOver(){
        setIsOver(true);
    }

    function handleMoveout(){
        setIsOver(false);
    }

    return (
        <div className="todoItem" onMouseOver={handleMouseOver} onMouseOut={handleMoveout}>
            <li 
            style={{textDecoration: isDone && "line-through"}} 
            onClick={handleClick}>{props.toDoItem}</li>
            <button onClick={()=> {
                props.onCheck(props.id);
            }} style={{display: !isOver && "none"}}>X</button>
        </div>
    )
}

export default ToDoItem;