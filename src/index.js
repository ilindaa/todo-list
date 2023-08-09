import './style.css';
import { addTaskForm, addPlusTaskButton } from './taskForm';
import { addProjectForm, addPlusProjectButton } from './projectForm';
import { displayDefaultProjects, displayUserProjects } from './display'; 

addPlusTaskButton(document.getElementById('content'));
addPlusProjectButton(document.getElementById('content'));
addTaskForm();
addProjectForm();

displayDefaultProjects();
displayUserProjects();