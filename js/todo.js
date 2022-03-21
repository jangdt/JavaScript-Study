const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";
const toDos = [];

function saveTodos()
{
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteTodo(event) {
    const li = event.target.parentElement;
    const span = li.querySelector("span");

    toDos.forEach((value, index)=>{
        if(value === span.innerText)
        {
            toDos.splice(index,1);
        }
    });
    li.remove();

    //항목을 지우고 다시 저장하자.
    saveTodos();
}


function paintTodo(newTodoText) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodoText;

    const button = document.createElement("button");
    li.appendChild(button);
    button.innerText = "Delete";
    button.addEventListener("click", deleteTodo);

    console.log(li);
    todoList.appendChild(li);
}

function onTodoFormSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";

    //브라우저에 저장
    toDos.push(newTodo);

    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", onTodoFormSubmit);

//이미 저장된 TodoList가 있다면,
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null)
{
    const parseToDos = JSON.parse(savedToDos);
    parseToDos.forEach((value, index)=>{
        toDos.push(value); //or toDos[index] = value;
        paintTodo(value);
    });
}
