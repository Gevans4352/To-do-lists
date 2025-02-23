const taskList = document.getElementById("taskList");
 const todoForm = document.querySelector('#todoForm');
 const todoInput = document.getElementById('enterTask');
 const todoListUL = document.getElementById('todo-list');

 let allTodos = getTodos();
 console.log(allTodos);
 updateTodoList();
// let allTodos = [];

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
})

function addTodo(){
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        todoListUL.appendChild(li);
        todoInput.value = '';
        allTodos.push(todoText);
        updateTodoList();
        saveTodo();
        // createTodoItem(todoText);
    } else {
        alert("Please Enter a Task");
    }
    console.log(allTodos);
    
}
function updateTodoList(){
    todoListUL.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
        todoItem = createTodoItem(todo, todoIndex);
        todoListUL.append(todoItem);
    })
}
function createTodoItem(todo, todoIndex){
    const todoId = "todo-"+todoIndex;
    const todoLI = document.createElement("li");
    todoLI.className ="todo";
    todoLI.innerHTML = `
    <input type="checkbox" id="${todoId}">
<label class="custom-checkbox" for=${todoId}>
    <img fill="transparent" src="./check_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" height="24" viewbox="0 -960 960 960" width ="24">
</label>
<label for=${todoId} class="todo-text">
   ${todo}
</label>
<button class="delete-button">
    <img fill="transparent" src="./delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" height="24" viewbox="0 -960 960 960" width ="24">
</button>
    `
const deleteButton = todoLI.querySelector(".delete-button");
deleteButton.addEventListener("click", ()=> {
    deleteTodoItem(todoIndex);
})
    // todoLI.innerText = todo;
    return todoLI;
}
function deleteTodoItem(todoIndex){
    allTodos = allTodos.filter((_, i) => i !== todoIndex);
    saveTodo();
    updateTodoList();
}
function saveTodo(){
    const todosJson = JSON.stringify(allTodos)
    localStorage.setItem("todos", todosJson);
}
saveTodo();
function getTodos(){
    const todos = localStorage.getItem("todos") || "[]";
    return JSON.parse(todos);
}

// inside the add todo function add const todoObject ={
// text: todoText, completed}























// function enterContent() {
//     const enterTask = document.getElementById("enterTask").value;
//     if(!enterTask){
//         alert("Please Enter a Task");
//     }
//     addTodo();
// }

















































// document.getElementById("submit");
// function(){
//     if(document.getElementById('#content input').value.length == 0){
//         alert("Please Enter a Task")
//     } else{
//         document.querySelector('#taskList').innerHTML += ` <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }

//         var tasks = document.querySelectorAll(".task");
//         for(var i=0; i<tasks.length; i++){
//             tasks[i].onclick = function(){
//                 this.classList.toggle('completed');
//             }
//         }

//         document.querySelector("#newtask input").value = "";
//     }
// }
        


