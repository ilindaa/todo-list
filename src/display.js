import { allProjects } from "./project";
import { openEditProjectForm, closeEditProjectForm } from "./projectForm";
import { openEditTaskForm, closeEditTaskForm, removeSelectProjectOption } from "./taskForm";
import editSVGIcon from "./Icons/square-edit-outline.svg";
import closeSVGIcon from "./Icons/trash-can-outline.svg";
import inboxSVGIcon from "./Icons/inbox-svgrepo-com.svg";

export function displayDefaultProjects() {
    const defaultContent = document.querySelector('.default-content');

    for (let i = 0; i < allProjects.defaultArr.length; i++) {
        const projectButton = document.createElement('button');
        const projectNameDiv = document.createElement('div');

        projectButton.type = 'button';
        // using the sidebar-project class for now
        projectButton.classList.add('sidebar-project');
        projectButton.dataset.defaultProjectIndex = i;
        projectButton.onclick = displayProjectTitle;
        projectButton.addEventListener('click', setActiveTab);

        projectButton.appendChild(projectNameDiv);
        projectNameDiv.classList.add('project-name');

        if (i === 0) {
            const iIcon = new Image(25, 25);
            iIcon.src = inboxSVGIcon;
            projectNameDiv.appendChild(iIcon);
        }

        const buttonText = document.createElement('div');
        buttonText.textContent = allProjects.defaultArr[i].name;
        projectNameDiv.appendChild(buttonText);

        defaultContent.appendChild(projectButton);
    }
}

// Display the project name, allow editing and deleting
export function displayUserProjects() {
    const projectsContent = document.querySelector('.projects-content');
    projectsContent.innerHTML = '';

    for (let i = 0; i < allProjects.userArr.length; i++) {
        const projectButton = document.createElement('button');
        const projectName = document.createElement('div');
        
        projectButton.type = 'button';
        projectButton.classList.add('sidebar-project');
        projectButton.dataset.projectIndex = i;
        projectButton.onclick = displayProjectTitle;
        projectButton.addEventListener('click', setActiveTab);

        projectName.textContent = allProjects.userArr[i].name;
        
        projectButton.appendChild(projectName);

        const buttonsDiv = document.createElement('div');
        const editIcon = document.createElement('button');
        const deleteIcon = document.createElement('button');

        buttonsDiv.classList.add('flex-buttons');

        editIcon.type = 'button';
        deleteIcon.type = 'button';

        const eIcon = new Image(25, 25);
        const dIcon = new Image(25, 25);

        eIcon.src = editSVGIcon;
        dIcon.src = closeSVGIcon;

        editIcon.appendChild(eIcon);
        deleteIcon.appendChild(dIcon);

        editIcon.onclick = openEditProjectForm;
        deleteIcon.onclick = removeProject;

        projectButton.appendChild(buttonsDiv);
        buttonsDiv.append(editIcon, deleteIcon);
        projectsContent.appendChild(projectButton);
    }
}

// Remove a project from the array, options, and projects-area; select and re-display the inbox and re-display projects-area
function removeProject(event) {
    // Stop propagation so only the inner element function is executed and not the button's function
    event.stopPropagation();
    const projectIndex = parseInt(this.parentElement.parentElement.dataset.projectIndex);
    selectAndDisplayInbox();
    allProjects.userArr.splice(projectIndex, 1);
    removeSelectProjectOption(projectIndex);
    displayUserProjects();
    closeEditProjectForm();
}

export function displayProjectTitle() {
    let defaultProjectIndex;
    let projectIndex;

    // Set the defaultProjectIndex to 0 (Inbox) or the project that was clicked 
    if (this !== undefined) {
        defaultProjectIndex = parseInt(this.dataset.defaultProjectIndex);
        projectIndex = parseInt(this.dataset.projectIndex);
    } else {
        defaultProjectIndex = 0; 
    }

    const taskTitle = document.querySelector('.task-title');
    const header = document.createElement('h2');

    taskTitle.innerHTML = '';
    header.classList.add('task-header');

    // Check if the user clicked on a default project or a user project
    if (!isNaN(defaultProjectIndex)) {
        header.textContent = allProjects.defaultArr[defaultProjectIndex].name;
        header.dataset.defaultProjectIndex = defaultProjectIndex;
    }

    if (!isNaN(projectIndex)) {
        // If there is nothing in the user array at the index, return nothing (task-area is not updated)
        if (allProjects.userArr[projectIndex] == undefined) return;
        header.textContent = allProjects.userArr[projectIndex].name;
        header.dataset.projectIndex = projectIndex;
    }

    taskTitle.appendChild(header);
    displayTasks();
}

// Gets the index of which project it is and if array (default or user)
export function getCurrentIndexAndArray() {
    const header = document.querySelector('.task-header');
    const defaultProjectIndex = parseInt(header.dataset.defaultProjectIndex);
    const projectIndex = parseInt(header.dataset.projectIndex);
    let currentProjectIndex;
    let array;

    if (!isNaN(defaultProjectIndex)) {
        currentProjectIndex = defaultProjectIndex;
        array = allProjects.defaultArr;
    }

    if (!isNaN(projectIndex)) {
        currentProjectIndex = projectIndex;
        array = allProjects.userArr;
    }

    return { currentProjectIndex, array };
}

export function displayTasks() {
    closeEditTaskForm();
    const taskContent = document.querySelector('.task-content');
    taskContent.innerHTML = '';

    let { currentProjectIndex, array } = getCurrentIndexAndArray();

    for (let i = 0; i < array[currentProjectIndex].todoArray.length; i++) {
        const todoDiv = document.createElement('div');
        const todoDivLeftDiv = document.createElement('div');
        const todoDivRightDiv = document.createElement('div');

        const title = document.createElement('div');
        const dueDate = document.createElement('div');
        const todo = array[currentProjectIndex].todoArray[i];

        todoDiv.classList.add('sidebar-task');
        todoDivLeftDiv.classList.add('sidebar-task-left');
        todoDivRightDiv.classList.add('sidebar-task-right');

        if (todo.priority === 'p1') {
            todoDiv.classList.add('priority-one');
        } else if (todo.priority === 'p2') {
            todoDiv.classList.add('priority-two');
        } else if (todo.priority === 'p3') {
            todoDiv.classList.add('priority-three')
        } else if (todo.priority === 'p4') {
            todoDiv.classList.add('priority-four');
        }

        title.textContent = todo.title;
        if (todo.dueDate === '') {
            dueDate.textContent = 'No Date';
        } else {
            dueDate.textContent = todo.dueDate;
        }

        todoDiv.dataset.taskIndex = i;

        const editIcon = document.createElement('button');
        const deleteIcon = document.createElement('button');

        editIcon.type = 'button';
        deleteIcon.type = 'button';

        const eIcon = new Image(25, 25);
        const dIcon = new Image(25, 25);

        eIcon.src = editSVGIcon;
        dIcon.src = closeSVGIcon;

        editIcon.appendChild(eIcon);
        deleteIcon.appendChild(dIcon);

        editIcon.onclick = openEditTaskForm;
        deleteIcon.onclick = removeTask;

        taskContent.appendChild(todoDiv);
        todoDiv.append(todoDivLeftDiv, todoDivRightDiv);
        todoDivLeftDiv.append(title, dueDate);
        todoDivRightDiv.append(editIcon, deleteIcon);
    }
}

function removeTask() {
    let { currentProjectIndex, array } = getCurrentIndexAndArray();
    const taskIndex = parseInt(this.parentElement.parentElement.dataset.taskIndex);
    array[currentProjectIndex].todoArray.splice(taskIndex, 1);

    displayTasks();
    closeEditTaskForm();
}

// Set the active tab when a default/user project is selected, remove active class for tab when there is nothing selected (removing projects)
function setActiveTab() {
    let prev = document.getElementsByClassName('active');
    if (prev.length > 0) {
        prev[0].className = prev[0].className.replace('active', '');
    }
    if (this === undefined) {
        const inbox = document.querySelector('[data-default-project-index="0"]');
        inbox.classList.add('active');
        return;
    }
    this.classList.add('active');
    closeEditProjectForm();
}

export function selectAndDisplayInbox() {
    const inbox = document.querySelector('[data-default-project-index="0"]');
    inbox.classList.add('active');
    displayProjectTitle();
}