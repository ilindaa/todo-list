import './style.css';
import { addTaskForm, addPlusTaskButton, editTaskForm } from './taskForm';
import { addProjectForm, addPlusProjectButton, editProjectForm } from './projectForm';
import { displayDefaultProjects, displayUserProjects, selectAndDisplayInbox } from './display'; 

addPlusTaskButton(document.getElementById('content'));
addPlusProjectButton(document.getElementById('content'));
addTaskForm();
addProjectForm();

displayDefaultProjects();
displayUserProjects();

editProjectForm();
editTaskForm();

selectAndDisplayInbox();