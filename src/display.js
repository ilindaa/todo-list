import { allProjects } from "./project";
import { removeSelectProjectOption } from "./taskForm";

// Display the project name, allow editing and deleting
export function displayProject() {
    const projectsArea = document.querySelector('.projects-area');
    projectsArea.innerHTML = '';

    for (let i = 0; i < allProjects.array.length; i++) {
        const projectDiv = document.createElement('div');
        const projectName = document.createElement('div');
        
        projectDiv.classList.add('sidebar-project');
        projectDiv.dataset.projectIndex = i;

        projectName.textContent = allProjects.array[i].name;

        projectDiv.appendChild(projectName);

        // edit, delete (all except Inbox - implement later)
        const buttonsDiv = document.createElement('div');
        const editIcon = document.createElement('button');
        const deleteIcon = document.createElement('button');

        editIcon.type = 'button';
        deleteIcon.type = 'button';

        editIcon.textContent = '✍';
        deleteIcon.textContent = '💩';

        // edit.onclick = 
        deleteIcon.onclick = removeProject;

        projectDiv.appendChild(buttonsDiv);
        buttonsDiv.appendChild(editIcon);
        buttonsDiv.appendChild(deleteIcon);

        projectsArea.appendChild(projectDiv);
    }
}

function removeProject() {
    const projectIndex = parseInt(this.parentElement.dataset.projectIndex);

    allProjects.array.splice(projectIndex, 1);

    displayProject();
    removeSelectProjectOption(projectIndex);

    console.log(allProjects);
}

