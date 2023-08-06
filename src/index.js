import './style.css';
import { projectFactory } from './project';
import { todoFactory } from './todo';
import { addTaskForm, addPlusTaskButton } from './taskForm';
import { addProjectForm, addPlusProjectButton } from './projectForm';

console.log("Test");

const h1tag = document.createElement('h1');
h1tag.textContent = 'Testing';

document.body.appendChild(h1tag);

const testProject = projectFactory("Project Title", []);
console.log(testProject.title);
console.log(testProject.todoArray);

const test = todoFactory("Todo List", "This is the description: code todo list", "Next Friday", "High", "This is a note.", true);
console.log(test.title);
console.log(test.description);
console.log(test.dueDate);
console.log(test.priority);
console.log(test.notes);
console.log(test.checklist);

addPlusTaskButton(document.getElementById('content'));
addPlusProjectButton(document.getElementById('content'));
addTaskForm();
addProjectForm();