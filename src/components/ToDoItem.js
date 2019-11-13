import React from "react"

function ToDoItem(props) {
  return (
    <div className="todo-list">
      <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => console.log('changed')}
        />
      <p>{props.item.text}</p>
    </div>
    )
}

export default ToDoItem;
