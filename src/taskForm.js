// Add Task Form
export function addTaskForm() {
    const content = document.getElementById('content');
    const taskForm = document.createElement('form');
    const taskName = document.createElement('input');
    const taskDescription = document.createElement('input');
    const dueDate = document.createElement('input');
    const priority = document.createElement('select');
    const project = document.createElement('select');
    const cancelButton = document.createElement('button');
    const addTaskButton = document.createElement('button');

    taskName.required = true;

    taskName.type = 'text';
    taskDescription.type = 'text';
    dueDate.type = 'datetime-local';
    cancelButton.type = 'button'; // close the form, reset fields
    addTaskButton.type = 'submit'; // need to prevent default, if there isn't a task name - gray out the button

    taskName.placeholder = 'Task name';
    taskDescription.placeholder = 'Description';
    
    cancelButton.textContent = 'Cancel';
    addTaskButton.textContent = 'Add task';

    taskForm.id = 'task-form';
    taskName.id = 'name';
    taskDescription.id = 'description';
    dueDate.id = 'date';
    priority.id = 'priority';
    project.id = 'project';

    cancelButton.value = 'cancel';
    addTaskButton.value = 'submit';

    cancelButton.onclick = closeTaskForm;

        // Priority Options
        const priorityPlaceholder = document.createElement('option');
        const priority1 = document.createElement('option');
        const priority2 = document.createElement('option');
        const priority3 = document.createElement('option');
        const priority4 = document.createElement('option');

        priorityPlaceholder.hidden = true;

        priorityPlaceholder.text = 'Priority';
        priority1.text = 'Priority 1';
        priority2.text = 'Priority 2';
        priority3.text = 'Priority 3';
        priority4.text = 'Priority 4';

        priorityPlaceholder.value = '';
        priority1.value = 'p1';
        priority2.value = 'p2';
        priority3.value = 'p3';
        priority4.value = 'p4';

        priority.add(priorityPlaceholder);
        priority.add(priority1);
        priority.add(priority2);
        priority.add(priority3);
        priority.add(priority4);

        // Project Options
        // Get them from the array that holds all projects
        const inbox = document.createElement('option');

        inbox.selected = true;

        inbox.text = 'Inbox';

        inbox.value = 'inbox';

        project.add(inbox);

    content.appendChild(taskForm);
    taskForm.appendChild(taskName);
    taskForm.appendChild(taskDescription);
    taskForm.appendChild(dueDate);
    taskForm.appendChild(priority);
    taskForm.appendChild(project);
    taskForm.appendChild(cancelButton);
    taskForm.appendChild(addTaskButton);
}

function clearTaskForm() {
    const taskName = document.getElementById('name');
    const taskDescription = document.getElementById('description');
    const dueDate = document.getElementById('date');
    const priority = document.getElementById('priority');
    const project = document.getElementById('project');

    taskName.value = '';
    taskDescription.value = '';
    dueDate.value = '';
    priority.value = '';
    project.value = 'inbox';
}

function closeTaskForm() {
    const taskForm = document.getElementById('task-form');
    taskForm.hidden = true;

    clearTaskForm();
}

function openTaskForm() {
    const taskForm = document.getElementById('task-form');
    taskForm.hidden = false;
}

export function addPlusTaskButton(element) {
    const plusButton = document.createElement('button');
    plusButton.type = 'button';
    plusButton.value = 'plus';
    plusButton.textContent = '+ Task';
    plusButton.onclick = openTaskForm;

    element.appendChild(plusButton);
}