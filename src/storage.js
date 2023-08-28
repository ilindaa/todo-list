import { selectAndDisplayInbox } from "./display";
import { projectFactory } from "./project";
import { todoFactory } from "./todo";

export function runLocalStorage() {
    if (localStorage.getItem("allProjects")) {
        selectAndDisplayInbox();
    } else {
        localStorage.setItem("allProjects", JSON.stringify([]));
        addSampleProjectsAndTodos();
    }
}

function addSampleProjectsAndTodos() {
    const inbox = projectFactory('Inbox', []);
    const pog = projectFactory('Pog', []);
    const test = projectFactory('Test', []);

    const test1 = todoFactory('Test1', 'D1', '2023-08-06', 'p1', 'Inbox');
    const test2 = todoFactory('Test2', 'D2', '', 'p2', 'Inbox');
    const test3 = todoFactory('Test3', 'D4', '2023-08-17', 'p4', 'Pog');
    const test4 = todoFactory('Test4', 'D5', '2023-08-17', 'p4', 'Test');
    const test5 = todoFactory('Test5', 'D3', '2023-08-18', 'p3', 'Inbox');

    inbox.todoArray.push(test1, test2, test5);
    pog.todoArray.push(test3);
    test.todoArray.push(test4);

    selectAndDisplayInbox();
}

// Make changes to display.js [remove project, display project title, getCurentIndexAndArray, displayTasks, remove task ]
// projectForm.js, taskForm.js [forms - add functions, open edit form, save functions]
function updateLocalProjects(updatedProjects) {
    localStorage.setItem("allProjects", JSON.stringify(updatedProjects));
}

function clearLocalStorage() {
    if (confirm("Are you sure you want to clear the local storage? This action will restore the todo list to its original state and refresh the page.\nThis action cannot be undone.")) {
        localStorage.clear();
        location.reload();
    }
}