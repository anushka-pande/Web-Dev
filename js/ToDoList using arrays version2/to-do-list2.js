const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {                  //Generating the HTML for our Todo List
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML); // Output: "<p>make dinner</p><p>wash dishes</p>"

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-task-input');
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  // Clear the input field 
  inputElement.value = '';
  renderTodoList();
}