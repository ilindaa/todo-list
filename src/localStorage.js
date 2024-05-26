import { displayDefaultProjects, displayUserProjects } from './display'; 
import { allProjects } from './project';

// Check if there is an existing "todoList" item in local storage, else make one
export function runLocalStorage() {
    if (localStorage.getItem("todoList")) {
        displayProjects();
        console.log("Existing local storage found!");
    } else {
        localStorage.setItem("todoList", JSON.stringify([]));
        addSampleTodoListContent();
        console.log("Creating a new local storage...");
    }
}

// Displays the default (e.g. Inbox) projects and user created projects
function displayProjects() {
    displayDefaultProjects();
    displayUserProjects();
}

// Update the "todoList" in local storage with "updatedTodoList"
export function updateLocalTodoList(updatedTodoList) {
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
}

// Add sample todo list contents to local storage
function addSampleTodoListContent() {
    updateLocalTodoList(allProjects);
    displayProjects();
}

// Clears the local storage
export function clearLocalStorage() {
    localStorage.clear();
/*     if (confirm("Are you sure you want to clear the local storage? This action will restore Todo List to its original state and refresh the page.\nThis action cannot be undone.")) {
        localStorage.clear();
        location.reload();
    } */
}