import './style.css';
import { addTaskForm, addPlusTaskButton, editTaskForm } from './taskForm';
import { addProjectForm, addPlusProjectButton, editProjectForm } from './projectForm';
import { displayDefaultProjects, displayUserProjects } from './display'; 

addPlusTaskButton(document.getElementById('content'));
addPlusProjectButton(document.getElementById('content'));
addTaskForm();
addProjectForm();

displayDefaultProjects();
displayUserProjects();

editProjectForm();
editTaskForm();

// function selectAndDisplayInbox() {
//     const inbox = document.querySelector('[data-default-project-index="0"]');
//     inbox.classList.add('active');
//     displayProjectTitle();
// }

// selectAndDisplayInbox();