import { projectFactory, allProjects } from "./project";
import { addSelectProjectOption, editSelectProjectOption } from "./taskForm"; /* For adding and editing the select project options */
import { displayUserProjects, selectAndDisplayInbox } from "./display";
import plusSVGIcon from "./Icons/plus-thick.svg";

// Add Project Form - creates a project form to add a new project
export function addProjectForm() {
    const content = document.getElementById('content');
    const formAlign = document.createElement('div');
    const projectForm = document.createElement('form');
    const formContentDiv = document.createElement('div');
    const header = document.createElement('h2');
    const projectNameLabel = document.createElement('label');
    const projectName = document.createElement('input');
    const formButtonsDiv = document.createElement('div');
    const cancelButton = document.createElement('button');
    const addProjectButton = document.createElement('button');

    projectForm.style.display = 'none';
    projectForm.onsubmit = function(event) {
        event.preventDefault();
        addProject();
    }
    projectName.required = true;

    projectName.type = 'text';
    cancelButton.type = 'button'; // close form and clear form
    addProjectButton.type = 'submit';

    projectNameLabel.htmlFor = 'project-name';

    projectForm.id = 'project-form';
    projectName.id = 'project-name';
    
    header.textContent = 'Add Project';
    projectNameLabel.textContent = 'Project Name';
    cancelButton.textContent = 'Cancel';
    addProjectButton.textContent = 'Add';

    cancelButton.value = 'cancel';

    formAlign.classList.add('form-align');
    formContentDiv.classList.add('form-content-div');
    formButtonsDiv.classList.add('form-buttons-div');
    cancelButton.classList.add('cancel-button');
    addProjectButton.classList.add('add-save-button');
    
    cancelButton.onclick = closeProjectForm;

    content.appendChild(formAlign);
    formAlign.appendChild(projectForm);
    projectForm.append(formContentDiv);
    formContentDiv.append(header, projectNameLabel, projectName, formButtonsDiv);
    formButtonsDiv.append(cancelButton, addProjectButton);
}

function clearProjectForm() {
    const projectForm = document.getElementById('project-form');
    projectForm.reset();
}

function closeProjectForm() {
    const projectForm = document.getElementById('project-form');
    projectForm.style.display = 'none';

    clearProjectForm();
}

function openProjectForm() {
    const projectForm = document.getElementById('project-form');
    projectForm.style.display = 'block';
}

// Navbar add plus project button
export function addPlusProjectButton(element) {
    const plusButton = document.createElement('button');
    plusButton.type = 'button';
    plusButton.value = 'plus';

    const pIcon = new Image(16, 16);
    const buttonText = document.createElement('div');

    buttonText.textContent = 'Add Project';

    pIcon.src = plusSVGIcon;

    plusButton.append(pIcon, buttonText);
    
    plusButton.onclick = openProjectForm;

    element.appendChild(plusButton);
}

// Adds a project to allProjects, also add the select option to the Add Project and Edit Project select lists
function addProject() {
    const projectName = document.getElementById('project-name');
    const newProject = projectFactory(projectName.value, []);
    allProjects.userArr.push(newProject);
    const project = document.getElementById('project');
    const editProject = document.getElementById('edit-project');

    addSelectProjectOption(project, projectName.value);
    addSelectProjectOption(editProject, projectName.value);

    closeProjectForm();
    displayUserProjects();
}

// Editing project form - creates a form to edit an existing project
export function editProjectForm() {
    const projectsArea = document.querySelector('.projects-area');
    const formAlign = document.createElement('div');
    const projectForm = document.createElement('form');
    const formContentDiv = document.createElement('div');
    const header = document.createElement('h2');
    const projectNameLabel = document.createElement('label');
    const projectName = document.createElement('input');
    const formButtonsDiv = document.createElement('div');
    const cancelButton = document.createElement('button');
    const saveButton = document.createElement('button');

    projectName.type = 'text';
    cancelButton.type = 'button';
    saveButton.type = 'submit';

    projectNameLabel.htmlFor = 'edit-project-name';

    projectForm.id = 'edit-project-form';
    projectName.id = 'edit-project-name';
    saveButton.id = 'save-project-name';

    projectForm.style.display = 'none';
    projectName.required = true;

    header.textContent = 'Edit Project';
    projectNameLabel.textContent = 'Project Name';
    cancelButton.textContent = 'Cancel';
    saveButton.textContent = 'Save';

    cancelButton.value = 'cancel';

    formAlign.classList.add('form-align');
    formContentDiv.classList.add('form-content-div');
    formButtonsDiv.classList.add('form-buttons-div');
    cancelButton.classList.add('cancel-button');
    saveButton.classList.add('add-save-button');

    cancelButton.onclick = closeEditProjectForm;

    projectsArea.appendChild(formAlign);
    formAlign.appendChild(projectForm);
    projectForm.append(formContentDiv);
    formContentDiv.append(header, projectNameLabel, projectName, formButtonsDiv);
    formButtonsDiv.append(cancelButton, saveButton);
}

export function closeEditProjectForm() {
    const projectForm = document.getElementById('edit-project-form');
    projectForm.style.display = 'none';
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
        saveProjectName(project, projectIndex);
    }

    projectForm.style.display = 'block';
}

// Saves or updates the new project name into the array, edits the select option for the add and edit task forms, and clears the task area and re-displays projects again
function saveProjectName(project, projectIndex) {
    const newProjectName = document.getElementById('edit-project-name');
    project.name = newProjectName.value;
    const projectSelectList = document.getElementById('project');
    const editProjectSelectList = document.getElementById('edit-project');

    closeEditProjectForm();
    displayUserProjects();
    selectAndDisplayInbox();
    editSelectProjectOption(project, projectSelectList, parseInt(projectIndex));
    editSelectProjectOption(project, editProjectSelectList, parseInt(projectIndex));
}