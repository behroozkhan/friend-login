import {
  auth,
  db,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "../firbaseConfig.js";

// ...

// Get references to DOM elements
const addTodoBtn = document.querySelector("#add-todo");
const todoFullList = document.querySelector("#todo-full-list");
const inputValue = document.querySelector("#input-value");
let addBtn = document.querySelector(".add-btn");
let editItem;

const addTodo = async () => {
  let todoText = inputValue.value;

  const todoLiEl = document.createElement("LI");
  todoLiEl.textContent = todoText;
  const editBtn = document.createElement("BUTTON");
  editBtn.textContent = "Edit";
  const deleteBtn = document.createElement("BUTTON");
  deleteBtn.textContent = "Delete";

  todoLiEl.appendChild(editBtn);
  todoLiEl.appendChild(deleteBtn);
  todoFullList.appendChild(todoLiEl);

  editBtn.addEventListener("click", () => editLogic(todoLiEl));
  
  const todoInfo = { text: todoText };

  try {
    const uid = auth.currentUser.uid;
    // Add the todo to the "todos" subcollection of the user
    await addDoc(collection(db, "todos"), todoInfo);
    console.log("Todo added to Firestore:", todoText);
  } catch (error) {
    console.error("Error adding todo:", error);
  }
  inputValue.value = "";
};

let editLogic = (listItem) => {
  editItem = listItem;
  inputValue.value = editItem.textContent;
  addBtn.innerHTML = "Save";
  addBtn.removeEventListener("click", addTodo);
  addBtn.addEventListener("click", saveItem);
};

let saveItem = async () => {
  console.log("Editing", editItem);
  const updatedValue = inputValue.value;
  editItem.textContent = updatedValue;

  addBtn.innerHTML = "Add";
  addBtn.removeEventListener("click", saveItem);
  addBtn.addEventListener("click", addTodo);

 
  try {
    const uid = auth.currentUser.uid;
    console.log(auth.currentUser);
    const todoRef = doc(db, "todos", uid,wJuBbRukuobLs2fNVYOJ
    );

    // Update the specific field of the document using updateDoc
    await updateDoc(todoRef, {
      text: updatedValue,
    });

    console.log("Todo updated in Firestore:", updatedValue);
  } catch (error) {
    console.error("Error updating todo:", error);
  }
  inputValue.value = "";
  editItem = undefined;
};

// Add event listener to addTodoBtn
addTodoBtn.addEventListener("click", addTodo);
