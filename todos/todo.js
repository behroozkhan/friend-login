import {
    db,
    doc,
  setDoc,onAuthStateChanged
  } from "../firbaseConfig.js";
 


  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("Current user UID:", uid);
      } else {
      console.log("No user signed in");
    }
  });

// Get references to DOM elements
const addTodoBtn = document.querySelector("#add-todo");
const todoFullList = document.querySelector("#todo-full-list");
const inputValue = document.querySelector("#input-value");

// Add event listener to addTodoBtn
addTodoBtn.addEventListener("click", async () => {
  const todoText = inputValue.value;

  const todoItem = document.createElement("li");
  todoItem.textContent = todoText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  
  todoItem.appendChild(editBtn);
  todoItem.appendChild(deleteBtn);
  todoFullList.appendChild(todoItem);

  const todoInfo = { text: todoText };
  try {
    // const uid = user.uid;
    const todoRef = doc(db, "todos", uid);
    await setDoc(todoRef, todoInfo);
    console.log("Todo added to Firestore:", todoText);
  } catch (error) {
    console.error("Error adding todo:", error);
  }
});

// Get references to DOM elements
// const addTodoBtn = document.querySelector("#add-todo");
// const todoFullList = document.querySelector("#todo-full-list");

// const addTodo = ()=>{
    
//     const inputValue = document.querySelector("#input-value").value;
//         console.log(inputValue);

//         const todoLiEl = document.createElement("LI");
//         todoLiEl.textContent = todoText;
//         const editBtn = document.createElement("EDIT");
//         editBtn.textContent = "Edit";
//         const delteBtn = document.createElement("DELETE");
//         delteBtn.textContent = "Edit";

//         todoLiEl.appendChild(editBtn);
//         todoLiEl.appendChild(delteBtn);
//         todoFullList.appendChild(todoLiEl);

//         todoFullList.innerHTML += inputValue

// }

// addTodoBtn.addEventListener('click',addTodo)
