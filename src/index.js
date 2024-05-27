import './style.css';
import { addTaskForm, addPlusTaskButton, editTaskForm } from './taskForm';
import { addProjectForm, addPlusProjectButton, editProjectForm } from './projectForm';
import { closeFormWithModalOverlay, displaySelectProjectOptions, selectAndDisplayInbox } from './display'; 
import { runLocalStorage, clearLocalStorage } from './localStorage';

addPlusTaskButton(document.getElementById('content'));
addPlusProjectButton(document.getElementById('content'));
addTaskForm();
addProjectForm();

runLocalStorage();

editProjectForm();
editTaskForm();

closeFormWithModalOverlay();

selectAndDisplayInbox();
displaySelectProjectOptions(); 

clearLocalStorage();