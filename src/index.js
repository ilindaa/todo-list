import './style.css';
import { addTaskForm, addPlusTaskButton, editTaskForm } from './taskForm';
import { addProjectForm, addPlusProjectButton, editProjectForm } from './projectForm';
import { closeFormWithModalOverlay, displayDefaultProjects, displayUserProjects, selectAndDisplayInbox } from './display'; 

addPlusTaskButton(document.getElementById('content'));
addPlusProjectButton(document.getElementById('content'));
addTaskForm();
addProjectForm();

displayDefaultProjects();
displayUserProjects();

editProjectForm();
editTaskForm();

closeFormWithModalOverlay();

selectAndDisplayInbox();