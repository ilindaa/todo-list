import './style.css';
import { addTaskForm, addPlusTaskButton } from './taskForm';
import { addProjectForm, addPlusProjectButton } from './projectForm';

addPlusTaskButton(document.getElementById('content'));
addPlusProjectButton(document.getElementById('content'));
addTaskForm();
addProjectForm();