const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-task-input');
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  // Clear the input field 
  inputElement.value = '';
}