const loadTodo = async() =>{
    const url = "https://jsonplaceholder.typicode.com/todos"
    const res = await fetch(url);
    const data = await res.json();
   
        displayTodo(data);
    
}

loadTodo();



/**{
    "userId": 9,
    "id": 162,
    "title": "omnis laboriosam molestias animi sunt dolore",
    "completed": true
} */

const displayTodo = (todos) =>{
    // console.log(todos)
    // 1. get the todo container
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerText = "";

    todos.forEach(todo =>{
        // console.log(todo)
        // 2. create a element
        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
        <div class="todo-card">
          <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square"></i>`}  </p>
          <h3>${todo.title}</h3>
        </div>
        `

        todoContainer.appendChild(todoCard);
    })

}

