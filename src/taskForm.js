import { todoFactory } from "./todo";
import { allProjects } from "./project";
import { displayTasks, getCurrentIndexAndArray, openModalOverlay, closeModalOverlay } from "./display";
import plusSVGIcon from "./Icons/plus-thick.svg";

// Add Task Form - creates the task form to add a new task, add the default (and user project options)
export function addTaskForm() {
    const content = document.getElementById('content');
    const formAlign = document.createElement('div');
    const taskForm = document.createElement('form');
    const formContentDiv = document.createElement('div');
    const header = document.createElement('h2');
    const taskNameLabel = document.createElement('label');
    const taskName = document.createElement('input');
    const taskDescriptionLabel = document.createElement('label');
    const taskDescription = document.createElement('textArea');
    const dueDateLabel = document.createElement('label');
    const dueDate = document.createElement('input');
    const priorityLabel = document.createElement('label');
    const priority = document.createElement('select');
    const projectLabel = document.createElement('label');
    const project = document.createElement('select');
    const formButtonsDiv = document.createElement('div');
    const cancelButton = document.createElement('button');
    const addTaskButton = document.createElement('button');

    taskForm.onsubmit = function(event) {
        event.preventDefault();
        addTask();
    };
    taskName.required = true;
    priority.required = true;

    taskName.type = 'text';
    dueDate.type = 'date';
    cancelButton.type = 'button'; // close the form, reset fields
    addTaskButton.type = 'submit'; // need to prevent default, if there isn't a task name - gray out the button

    dueDate.valueAsDate = new Date();

    taskNameLabel.htmlFor = 'name';
    taskDescriptionLabel.htmlFor = 'description';
    dueDateLabel.htmlFor = 'date';
    priorityLabel.htmlFor = 'priority';
    projectLabel.htmlFor = 'project';

    taskForm.id = 'task-form';
    taskName.id = 'name';
    taskDescription.id = 'description';
    dueDate.id = 'date';
    priority.id = 'priority';
    project.id = 'project';

    header.textContent = 'Add Task';
    taskNameLabel.textContent = 'Name';
    taskDescriptionLabel.textContent = 'Description';
    dueDateLabel.textContent = 'Due Date';
    priorityLabel.textContent = 'Priority';
    projectLabel.textContent = 'Project';
    cancelButton.textContent = 'Cancel';
    addTaskButton.textContent = 'Add';

    cancelButton.value = 'cancel';

    taskForm.classList.add('close-form');
    formAlign.classList.add('form-align');
    formContentDiv.classList.add('form-content-div');
    formButtonsDiv.classList.add('form-buttons-div');
    cancelButton.classList.add('cancel-button');
    addTaskButton.classList.add('add-save-button');

    cancelButton.onclick = closeTaskForm;

        // Priority Options
        const priority1 = document.createElement('option');
        const priority2 = document.createElement('option');
        const priority3 = document.createElement('option');
        const priority4 = document.createElement('option');

        priority1.text = '🔴 Priority 1';
        priority2.text = '🟠 Priority 2';
        priority3.text = '🔵 Priority 3';
        priority4.text = '⚪ Priority 4';

        priority1.value = 'p1';
        priority2.value = 'p2';
        priority3.value = 'p3';
        priority4.value = 'p4';

        priority.add(priority1);
        priority.add(priority2);
        priority.add(priority3);
        priority.add(priority4);

    content.appendChild(formAlign);
    formAlign.appendChild(taskForm);
    taskForm.append(formContentDiv);
    formContentDiv.append(header, taskNameLabel, taskName, taskDescriptionLabel, taskDescription, dueDateLabel, dueDate, priorityLabel, priority, projectLabel, project, formButtonsDiv);
    formButtonsDiv.append(cancelButton, addTaskButton);
    document.getElementById('priority').value = 'p4';

    // Project Options (we start off with Inbox only)
    addSelectProjectOption(project, 'Inbox');
    addSelectProjectOption(project, 'Pog'); // TESTING
    addSelectProjectOption(project, 'Test'); // TESTING
}

// Past me, you don't need to reset every field...
function clearTaskForm() {
    const taskForm = document.getElementById('task-form');
    taskForm.reset();
}

function closeTaskForm() {
    const taskForm = document.getElementById('task-form');
    taskForm.classList.replace('open-form', 'close-form');

    clearTaskForm();
    closeModalOverlay();
}

function openTaskForm() {
    const taskForm = document.getElementById('task-form');
    taskForm.classList.replace('close-form', 'open-form');

    openModalOverlay();
}

// Navbar add plus task button
export function addPlusTaskButton(element) {
    const plusButton = document.createElement('button');
    plusButton.type = 'button';
    plusButton.value = 'plus';

    const pIcon = new Image(16, 16);
    const buttonText = document.createElement('div');

    buttonText.textContent = 'Add Task';

    pIcon.src = plusSVGIcon;

    plusButton.appendChild(pIcon);
    plusButton.appendChild(buttonText);

    plusButton.onclick = openTaskForm;

    element.appendChild(plusButton);
}

// Adds a task to a project in allProjects
export function addTask() {
    const taskName = document.getElementById('name');
    const taskDescription = document.getElementById('description');
    const dueDate = document.getElementById('date');
    const priority = document.getElementById('priority');
    const project = document.getElementById('project');
    const task = todoFactory(taskName.value, taskDescription.value, dueDate.value, priority.value, project.value);

    // If the user selected inbox, push the task into inbox else loop through the user's projects and push it into the respective one
    if (project.value === allProjects.defaultArr[0].name) {
        allProjects.defaultArr[0].todoArray.push(task);
    } else {
        for (let i = 0; i < allProjects.userArr.length; i++) {
            if (project.value === allProjects.userArr[i].name) {
                allProjects.userArr[i].todoArray.push(task);
            }
        }
    }

    closeTaskForm();
    displayTasks();
}

// Adds a select option to projects (so the user can assign a task to a specific project)
// project input element can be from Add Task or Edit Task
export function addSelectProjectOption(project, optionName) {
    const projectOption = document.createElement('option');

    projectOption.text = optionName;
    projectOption.value = optionName;
    projectOption.id = optionName; 

    project.add(projectOption);
}

// project input element can be from Add Task or Edit Task
export function removeSelectProjectOption(project, projectIndex) {
    project.remove(projectIndex+1);
}

// project input element can be from Add Task or Edit Task
export function editSelectProjectOption(project, projectSelectList, projectIndex) {
    projectSelectList.options[projectIndex+1].value = project.name;
    projectSelectList.options[projectIndex+1].id = project.name;
    projectSelectList.options[projectIndex+1].textContent = project.name;
}

// Editing task form - creates a form to edit an existing task, add the default (and user project options)
export function editTaskForm() {
    const taskArea = document.querySelector('.task-area');
    const formAlign = document.createElement('div');
    const taskForm = document.createElement('form');
    const formContentDiv = document.createElement('div');
    const header = document.createElement('h2');
    const taskName = document.createElement('input');
    const taskNameLabel = document.createElement('label');
    const taskDescriptionLabel = document.createElement('label');
    const taskDescription = document.createElement('textArea');
    const dueDateLabel = document.createElement('label');
    const dueDate = document.createElement('input');
    const priority = document.createElement('select');
    const priorityLabel = document.createElement('label');
    const projectLabel = document.createElement('label');
    const project = document.createElement('select');
    const formButtonsDiv = document.createElement('div');
    const cancelButton = document.createElement('button');
    const saveButton = document.createElement('button');

    taskName.required = true;
    priority.required = true;

    taskName.type = 'text';
    dueDate.type = 'date';
    cancelButton.type = 'button';
    saveButton.type = 'submit';

    taskNameLabel.htmlFor = 'edit-name';
    taskDescriptionLabel.htmlFor = 'edit-description';
    dueDateLabel.htmlFor = 'edit-date';
    priorityLabel.htmlFor = 'edit-priority';
    projectLabel.htmlFor = 'edit-project';

    taskForm.id = 'edit-task-form';
    taskName.id = 'edit-name';
    taskDescription.id = 'edit-description';
    dueDate.id = 'edit-date';
    priority.id = 'edit-priority';
    project.id = 'edit-project';

    header.textContent = 'Edit Task';
    taskNameLabel.textContent = 'Name';
    taskDescriptionLabel.textContent = 'Description';
    dueDateLabel.textContent = 'Due Date';
    priorityLabel.textContent = 'Priority';
    projectLabel.textContent = 'Project';
    cancelButton.textContent = 'Cancel';
    saveButton.textContent = 'Save';

    cancelButton.value = 'cancel';

    taskForm.classList.add('close-form');
    formAlign.classList.add('form-align');
    formContentDiv.classList.add('form-content-div');
    formButtonsDiv.classList.add('form-buttons-div');
    cancelButton.classList.add('cancel-button');
    saveButton.classList.add('add-save-button');

    cancelButton.onclick = closeEditTaskForm;

        // Priority Options
        const priority1 = document.createElement('option');
        const priority2 = document.createElement('option');
        const priority3 = document.createElement('option');
        const priority4 = document.createElement('option');

        priority1.text = '🔴 Priority 1';
        priority2.text = '🟠 Priority 2';
        priority3.text = '🔵 Priority 3';
        priority4.text = '⚪ Priority 4';

        priority1.value = 'p1';
        priority2.value = 'p2';
        priority3.value = 'p3';
        priority4.value = 'p4';

        priority.add(priority1);
        priority.add(priority2);
        priority.add(priority3);
        priority.add(priority4);

    taskArea.appendChild(formAlign);
    formAlign.appendChild(taskForm);
    taskForm.append(formContentDiv);
    formContentDiv.append(header, taskNameLabel, taskName, taskDescriptionLabel, taskDescription, dueDateLabel, dueDate, priorityLabel, priority, projectLabel, project, formButtonsDiv);
    formButtonsDiv.append(cancelButton, saveButton);

    // Project Options (we start off with Inbox only)
    addSelectProjectOption(project, 'Inbox');
    addSelectProjectOption(project, 'Pog'); // TESTING
    addSelectProjectOption(project, 'Test'); // TESTING
}

export function closeEditTaskForm() {
    const taskForm = document.getElementById('edit-task-form');
    taskForm.classList.replace('open-form', 'close-form');

    closeModalOverlay();
}

// Opens the edit task form (to allow viewing or editing)
export function openEditTaskForm() {
    const taskForm = document.getElementById('edit-task-form');
    const taskName = document.getElementById('edit-name');
    const taskDescription = document.getElementById('edit-description');
    const dueDate = document.getElementById('edit-date');
    const priority = document.getElementById('edit-priority');
    const project = document.getElementById('edit-project');

    let { currentProjectIndex, array } = getCurrentIndexAndArray();

    const taskIndex = this.parentElement.parentElement.dataset.taskIndex;
    const task = array[currentProjectIndex].todoArray[taskIndex];

    taskName.value = task.title;
    taskDescription.value = task.description;
    dueDate.value = task.dueDate;
    priority.value = task.priority;
    project.value = task.project;

    taskForm.onsubmit = function(event) {
        event.preventDefault();
        saveTaskInfo(task);
    };

    taskForm.classList.replace('close-form', 'open-form');
    openModalOverlay();
}

// Saves or updates the new task info into the array, closes the edit task form, and then re-displays the tasks
function saveTaskInfo(task) {
    const newTaskName = document.getElementById('edit-name');
    const newTaskDescription = document.getElementById('edit-description');
    const newDueDate = document.getElementById('edit-date');
    const newPriority = document.getElementById('edit-priority');
    const newProject = document.getElementById('edit-project');

    task.title = newTaskName.value;
    task.description = newTaskDescription.value;
    task.dueDate = newDueDate.value;
    task.priority = newPriority.value;
    task.project = newProject.value;

    closeEditTaskForm();
    displayTasks();
}