import './style.css';
// Factories
import { projectFactory } from './project';
import { todoFactory } from './todo';
// DOM
import { addTaskForm, addPlusTaskButton } from './taskForm';
import { addProjectForm, addPlusProjectButton } from './projectForm';

const h1tag = document.createElement('h1');
h1tag.textContent = 'Testing';
document.body.appendChild(h1tag);

const inbox = projectFactory("Inbox", []);
console.log(inbox.title, inbox.todoArray);

const test = todoFactory("Todo List", "This is the description: code todo list", "Next Friday", "High", "This is a note.", true);
console.log(test.title, test.description, test.dueDate, test.priority, test.notes, test.checklist);

inbox.todoArray.push(test);
console.log("Inbox's todoArray", inbox.todoArray);

const test2 = todoFactory("Play Pog", "I'm kind of addicted", "Tomorrow", "Low", "WAH...", false);
inbox.todoArray.push(test2);
console.log("Inbox's todoArray", inbox.todoArray);

addPlusTaskButton(document.getElementById('content'));
addPlusProjectButton(document.getElementById('content'));
addTaskForm();
addProjectForm();