// TODO self test - Create a component that renders
// either "you've got some work to do!" or
// "you did it!" depending on whether all the checkboxes
// are ticked.

import React from "react"

// function WellDone(id) {
//   const allItemsCompleted = ToDoItem.completed
//    {
//   if (todoItem.completed.all === true) {
//     return <p>Well Done! You completed all your To Do List!</p>;
//   }
//   return <p>You've got some work to do!</p>
//   }
// }

  function WellDone(props) {
    return <h1> You've got some work to do!</h1>;
  }

export default WellDone;

