import './style.css';
import { addTaskForm, addPlusTaskButton } from './taskForm';
import { addProjectForm, addPlusProjectButton } from './projectForm';
import { displayProject } from './display'; 

addPlusTaskButton(document.getElementById('content'));
addPlusProjectButton(document.getElementById('content'));
addTaskForm();
addProjectForm();

displayProject();