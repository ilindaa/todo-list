import { allProjects } from "./project";
import { removeSelectProjectOption } from "./taskForm";

export function displayDefaultProjects() {
    const defaultArea = document.querySelector('.default-area');

    for (let i = 0; i < allProjects.defaultArr.length; i++) {
        const projectDiv = document.createElement('div');
        const projectName = document.createElement('div');

        // using the sidebar-project class for now
        projectDiv.classList.add('sidebar-project');
        projectDiv.dataset.defaultIndex = i;

        projectName.textContent = allProjects.defaultArr[i].name;

        projectDiv.appendChild(projectName);
        defaultArea.appendChild(projectDiv);
    }
}

// Display the project name, allow editing and deleting
export function displayUserProjects() {
    const projectsArea = document.querySelector('.projects-area');
    projectsArea.innerHTML = '';

    for (let i = 0; i < allProjects.userArr.length; i++) {
        const projectDiv = document.createElement('div');
        const projectName = document.createElement('div');
        
        projectDiv.classList.add('sidebar-project');
        projectDiv.dataset.projectIndex = i;

        projectName.textContent = allProjects.userArr[i].name;

        projectDiv.appendChild(projectName);

        const buttonsDiv = document.createElement('div');
        const editIcon = document.createElement('button');
        const deleteIcon = document.createElement('button');

        editIcon.type = 'button';
        deleteIcon.type = 'button';

        editIcon.textContent = '✍';
        deleteIcon.textContent = '❌';

        // edit.onclick = 
        deleteIcon.onclick = removeProject;

        projectDiv.appendChild(buttonsDiv);
        buttonsDiv.appendChild(editIcon);
        buttonsDiv.appendChild(deleteIcon);

        projectsArea.appendChild(projectDiv);
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

