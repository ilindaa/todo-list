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
        projectButton.onclick = displayDefaultTasks;

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

function removeProject() {
    const projectIndex = parseInt(this.parentElement.parentElement.dataset.projectIndex);
    allProjects.userArr.splice(projectIndex, 1);

    removeSelectProjectOption(projectIndex);
    displayUserProjects();

    console.log("Default Arr", allProjects.defaultArr);
    console.log("User Arr", allProjects.userArr);
}

export function displayDefaultTasks() {
    const taskContent = document.querySelector('.task-content');
    taskContent.innerHTML = '';

    const header = document.createElement('h1');
    header.textContent = allProjects.defaultArr[0].name;

    taskContent.appendChild(header);

    for (let i = 0; i < allProjects.defaultArr.length; i++) {
        for (let j = 0; j < allProjects.defaultArr[i].todoArray.length; j++) {
            const todoDiv = document.createElement('div');
            const todoDivLeft = document.createElement('div');
            const todoDivRight = document.createElement('div');

            const title = document.createElement('div');
            const dueDate = document.createElement('div');
            const todo = allProjects.defaultArr[i].todoArray[j];

            todoDiv.classList.add('sidebar-task');
            todoDivLeft.classList.add('sidebar-task-left');
            todoDivRight.classList.add('sidebar-task-right');

            title.textContent = todo.title;
            if (todo.dueDate === '') {
                dueDate.textContent = 'No date';
            } else {
                dueDate.textContent = todo.dueDate;
            }

            todoDiv.dataset.defaultTaskIndex = j;

            // const editIcon = document.createElement('button');
            const deleteIcon = document.createElement('button');

            // editIcon.type = 'button';
            deleteIcon.type = 'button';
    
            // editIcon.textContent = '✍';
            deleteIcon.textContent = '❌';
    
            // edit.onclick = 
            deleteIcon.onclick = removeDefaultTask;

            taskContent.appendChild(todoDiv);
            todoDiv.appendChild(todoDivLeft);
            todoDiv.appendChild(todoDivRight);
            todoDivLeft.appendChild(title);
            todoDivLeft.appendChild(dueDate);
            todoDivRight.appendChild(deleteIcon);
        }
    }
}

function removeDefaultTask() {
    const defaultTaskIndex = parseInt(this.parentElement.parentElement.dataset.defaultTaskIndex);
    allProjects.defaultArr[0].todoArray.splice(defaultTaskIndex, 1);

    displayDefaultTasks();

    console.log("Default Arr", allProjects.defaultArr);
}