import { allProjects } from "./project";
import { removeSelectProjectOption } from "./taskForm";

export function displayDefaultProjects() {
    const defaultContent = document.querySelector('.default-content');

    for (let i = 0; i < allProjects.defaultArr.length; i++) {
        const projectButton = document.createElement('button');
        const projectName = document.createElement('div');

        projectButton.type = 'button';
        // using the sidebar-project class for now
        projectButton.classList.add('sidebar-project');
        projectButton.dataset.defaultProjectIndex = i;
        projectButton.onclick = displayProjectTitle;

        projectName.textContent = allProjects.defaultArr[i].name;

        projectButton.appendChild(projectName);
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

        projectName.textContent = allProjects.userArr[i].name;

        projectButton.appendChild(projectName);

        const buttonsDiv = document.createElement('div');
        // const editIcon = document.createElement('button');
        const deleteIcon = document.createElement('button');

        // editIcon.type = 'button';
        deleteIcon.type = 'button';

        // editIcon.textContent = '✍';
        deleteIcon.textContent = '❌';

        // edit.onclick = 
        deleteIcon.onclick = removeProject;

        projectButton.appendChild(buttonsDiv);
        // buttonsDiv.appendChild(editIcon);
        buttonsDiv.appendChild(deleteIcon);

        projectsContent.appendChild(projectButton);
    }
}

// Only the user projects are removable
function removeProject() {
    const projectIndex = parseInt(this.parentElement.parentElement.dataset.projectIndex);
    const taskTitle = document.querySelector('.task-title');
    taskTitle.innerHTML = '';
    allProjects.userArr.splice(projectIndex, 1);
    removeSelectProjectOption(projectIndex);
    displayUserProjects();
}

export function displayProjectTitle() {
    const defaultProjectIndex = parseInt(this.dataset.defaultProjectIndex);
    const projectIndex = parseInt(this.dataset.projectIndex);
    const taskTitle = document.querySelector('.task-title');
    const header = document.createElement('h1');

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
function getCurrentIndexAndArray() {
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

        title.textContent = todo.title;
        if (todo.dueDate === '') {
            dueDate.textContent = 'No date';
        } else {
            dueDate.textContent = todo.dueDate;
        }

        todoDiv.dataset.taskIndex = i;

        // const editIcon = document.createElement('button');
        const deleteIcon = document.createElement('button');

        // editIcon.type = 'button';
        deleteIcon.type = 'button';

        // editIcon.textContent = '✍';
        deleteIcon.textContent = '❌';

        // edit.onclick = 
        deleteIcon.onclick = removeTask;

        taskContent.appendChild(todoDiv);
        todoDiv.appendChild(todoDivLeftDiv);
        todoDiv.appendChild(todoDivRightDiv);
        todoDivLeftDiv.appendChild(title);
        todoDivLeftDiv.appendChild(dueDate);
        todoDivRightDiv.appendChild(deleteIcon);
    }
}

function removeTask() {
    let { currentProjectIndex, array } = getCurrentIndexAndArray();
    const taskIndex = parseInt(this.parentElement.parentElement.dataset.taskIndex);
    array[currentProjectIndex].todoArray.splice(taskIndex, 1);

    displayTasks();
}