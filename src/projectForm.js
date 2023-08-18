import { projectFactory, allProjects } from "./project";
import { addSelectProjectOption } from "./taskForm";
import { displayUserProjects, clearProjectTitleAndDisplayTask } from "./display";

export function addProjectForm() {
    const content = document.getElementById('content');
    const projectForm = document.createElement('form');
    const projectNameLabel = document.createElement('label');
    const projectName = document.createElement('input');
    const cancelButton = document.createElement('button');
    const addProjectButton = document.createElement('button');

    projectForm.hidden = true;
    projectForm.onsubmit = function(event) {
        event.preventDefault();
        addProject();
    }
    projectName.required = true;

    cancelButton.type = 'button'; // close form and clear form
    addProjectButton.type = 'submit';

    projectNameLabel.for = 'project-name';

    projectForm.id = 'project-form';
    projectName.id = 'project-name';
    
    projectNameLabel.textContent = 'Project Name';
    cancelButton.textContent = 'Cancel';
    addProjectButton.textContent = 'Add Project';

    cancelButton.value = 'cancel';

    cancelButton.onclick = closeProjectForm;

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
    plusButton.textContent = '+ Add Project';
    plusButton.onclick = openProjectForm;

    element.appendChild(plusButton);
}

function addProject() {
    const projectName = document.getElementById('project-name');
    const project = projectFactory(projectName.value, []);
    allProjects.userArr.push(project);

    addSelectProjectOption(projectName.value);

    closeProjectForm();
    displayUserProjects();
}

// Editing project form
export function editProjectForm() {
    const projectsArea = document.querySelector('.projects-area');
    const projectForm = document.createElement('form');
    const projectName = document.createElement('input');
    const cancelButton = document.createElement('button');
    const saveButton = document.createElement('button');

    projectForm.hidden = true;
    cancelButton.type = 'button';
    saveButton.type = 'submit';

    projectForm.id = 'edit-project-form';
    projectName.id = 'edit-project-name';
    saveButton.id = 'save-project-name';

    cancelButton.textContent = 'Cancel';
    saveButton.textContent = 'Save';

    cancelButton.value = 'cancel';
    cancelButton.onclick = closeEditProjectForm;

    projectsArea.appendChild(projectForm);
    projectForm.appendChild(projectName);
    projectForm.appendChild(cancelButton);
    projectForm.appendChild(saveButton);
}

export function closeEditProjectForm() {
    const projectForm = document.getElementById('edit-project-form');
    projectForm.hidden = true;
}

// Opens the edit project form (to allow viewing or editing)
export function openEditProjectForm(event) {
    // Stop propagation so only the inner element function is executed and not the button's function
    event.stopPropagation();
    const projectForm = document.getElementById('edit-project-form');
    const projectName = document.getElementById('edit-project-name');
    const projectIndex = this.parentElement.parentElement.dataset.projectIndex;

    const project = allProjects.userArr[projectIndex];

    projectName.value = project.name;

    projectForm.onsubmit = function(event) {
        event.preventDefault();
        saveProjectName(project);
    }

    projectForm.hidden = false;
}

// Saves the new project name into the array
function saveProjectName(project) {
    const newProjectName = document.getElementById('edit-project-name');
    project.name = newProjectName.value;

    closeEditProjectForm();
    displayUserProjects();
    clearProjectTitleAndDisplayTask();
}