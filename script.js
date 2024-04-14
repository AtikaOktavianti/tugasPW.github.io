document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
      }
    });
  
    function addTodoItem(todoText) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `
        <span>${todoText}</span>
        <button class="edit-btn btn btn-warning btn-sm">Edit</button>
        <button class="delete-btn btn btn-danger btn-sm ms-2">Hapus</button>
        <button class="complete-btn btn btn-success btn-sm ms-2">Selesai</button>
      `;
      todoList.appendChild(listItem);
  
      const deleteBtn = listItem.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function() {
        listItem.remove();
      });
  
      const editBtn = listItem.querySelector('.edit-btn');
      editBtn.addEventListener('click', function() {
        const newText = prompt('Edit tugas:', todoText);
        if (newText !== null && newText.trim() !== '') {
          listItem.querySelector('span').textContent = newText.trim();
        }
      });
  
      const completeBtn = listItem.querySelector('.complete-btn');
      completeBtn.addEventListener('click', function() {
        listItem.classList.toggle('text-decoration-line-through');
      });
    }
  });
  