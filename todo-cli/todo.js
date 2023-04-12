const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {

      // Write the date check condition here and return the array
      // of overdue items accordingly.
      k = all.filter((Element)=>
      Element.dueDate == yesterday)
      return k
    }
  
    function dueToday() {

        // Write the date check condition here and return the array
        // of todo items that are due today accordingly.
      k = all.filter((Element)=>
      Element.dueDate == today)
      return k
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      k = all.Element((Element)=>
      Element.dueDate == tomorrow)
      return k

    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      y = list.map((i)=> {
        const isComplete =i.completed ? "[X]":"[]";
        const display = i.dueDate == today? "":i.dueDate;
        return `${isComplete}${i.title.trim()}${display.trim()}`;
      })
      .join("/n");
    return y;

    }
    
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
module.exports=todoList;