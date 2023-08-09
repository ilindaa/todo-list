import { projectFactory, allProjects } from "./project";
import { addSelectProjectOption } from "./taskForm";
import { displayProject } from "./display";

export function addProjectForm() {
    const content = document.getElementById('content');
    const projectForm = document.createElement('form');
    const projectNameLabel = document.createElement('label');
    const projectName = document.createElement('input');
    const cancelButton = document.createElement('button');
    const addProjectButton = document.createElement('button');

    projectForm.hidden = true;
    projectName.required = true;

    cancelButton.type = 'button'; // close form and clear form
    addProjectButton.type = 'button';

    projectNameLabel.for = 'project-name';

    projectForm.id = 'project-form';
    projectName.id = 'project-name';
    
    projectNameLabel.textContent = 'Project Name';
    cancelButton.textContent = 'Cancel';
    addProjectButton.textContent = 'Add project';

    cancelButton.value = 'cancel';
    addProjectButton.value = 'add';

    cancelButton.onclick = closeProjectForm;
    addProjectButton.onclick = addProject;

    content.appendChild(projectForm);
    projectForm.appendChild(projectNameLabel);
    projectForm.appendChild(projectName);
    projectForm.appendChild(cancelButton);
    projectForm.appendChild(addProjectButton);
}

function clearProjectForm() {
    const projectName = document.getElementById('project-name');
    projectName.value = '';
}

function closeProjectForm() {
    const projectForm = document.getElementById('project-form');
    projectForm.hidden = true;

    clearProjectForm();
}

function openProjectForm() {
    const projectForm = document.getElementById('project-form');
    projectForm.hidden = false;
}

export function addPlusProjectButton(element) {
    const plusButton = document.createElement('button');
    plusButton.type = 'button';
    plusButton.value = 'plus';
    plusButton.textContent = '+ Project';
    plusButton.onclick = openProjectForm;

    element.appendChild(plusButton);
}

function addProject() {
    const projectName = document.getElementById('project-name');
    const project = projectFactory(projectName.value, []);
    allProjects.array.push(project);

    addSelectProjectOption(projectName.value);

    closeProjectForm();
    console.log(allProjects.array);
    displayProject();
}