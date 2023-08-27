import { projectFactory, allProjects } from "./project";
import { addSelectProjectOption, editSelectProjectOption } from "./taskForm";
import { displayUserProjects, displayFormOverlayBg, hideFormOverlayBg, selectAndDisplayInbox } from "./display";
import plusSVGIcon from "./Icons/plus-thick.svg";

export function addProjectForm() {
    const content = document.getElementById('content');
    const formAlign = document.createElement('div');
    const projectForm = document.createElement('form');
    const header = document.createElement('h2');
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
    cancelButton.onclick = closeProjectForm;

    content.appendChild(formAlign);
    formAlign.appendChild(projectForm);
    projectForm.appendChild(header);
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
    hideFormOverlayBg();
}

function openProjectForm() {
    const projectForm = document.getElementById('project-form');
    projectForm.hidden = false;
    displayFormOverlayBg();
}

export function addPlusProjectButton(element) {
    const plusButton = document.createElement('button');
    plusButton.type = 'button';
    plusButton.value = 'plus';

    const pIcon = new Image(16, 16);
    const buttonText = document.createElement('div');

    buttonText.textContent = 'Add Project';

    pIcon.classList.add('white-svg-icon');
    pIcon.src = plusSVGIcon;

    plusButton.appendChild(pIcon);
    plusButton.appendChild(buttonText);
    
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
    const formAlign = document.createElement('div');
    const projectForm = document.createElement('form');
    const header = document.createElement('h2');
    const projectNameLabel = document.createElement('label');
    const projectName = document.createElement('input');
    const cancelButton = document.createElement('button');
    const saveButton = document.createElement('button');

    projectName.type = 'text';
    cancelButton.type = 'button';
    saveButton.type = 'submit';

    projectNameLabel.htmlFor = 'edit-project-name';

    projectForm.id = 'edit-project-form';
    projectName.id = 'edit-project-name';
    saveButton.id = 'save-project-name';

    projectForm.hidden = true;
    projectName.required = true;

    header.textContent = 'Edit Project';
    projectNameLabel.textContent = 'Project Name';
    cancelButton.textContent = 'Cancel';
    saveButton.textContent = 'Save';

    cancelButton.value = 'cancel';

    formAlign.classList.add('form-align');
    cancelButton.onclick = closeEditProjectForm;

    projectsArea.appendChild(formAlign);
    formAlign.appendChild(projectForm);
    projectForm.appendChild(header);
    projectForm.appendChild(projectNameLabel);
    projectForm.appendChild(projectName);
    projectForm.appendChild(cancelButton);
    projectForm.appendChild(saveButton);
}

export function closeEditProjectForm() {
    const projectForm = document.getElementById('edit-project-form');
    projectForm.hidden = true;
    hideFormOverlayBg();
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

    projectForm.hidden = false;
    displayFormOverlayBg();
}

// Saves the new project name into the array, edit the select project option, display projects again and clear task area
function saveProjectName(project, projectIndex) {
    const newProjectName = document.getElementById('edit-project-name');
    project.name = newProjectName.value;

    closeEditProjectForm();
    displayUserProjects();
    selectAndDisplayInbox();
    editSelectProjectOption(project, parseInt(projectIndex));
}