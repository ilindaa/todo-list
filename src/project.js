// Factory over class here to avoid inheritance (focus on composition)
// project holds a todo array, the array holds todos
export const projectFactory = (name, todoArray) => {
    return { name, todoArray };
}

// Module Pattern
export const allProjects = (() => {
    let defaultArr = [ {name: 'Inbox', todoArray: [ {title: 'Trash Day', description: 'Throw the trash out before tomorrow.', dueDate: '2024-05-27', priority: 'p1', project: 'Inbox'}, 
    {title: 'Bathroom Cleaning', description: 'Wash the shower and bath tub.', dueDate: '2024-06-08', priority: 'p4', project: 'Inbox'},
    {title: 'Sweep the Floors', description: 'Sweep the kitchen and hallways.', dueDate: '2024-05-31', priority: 'p3', project: 'Inbox'},
    {title: 'Do the Dishes', description: 'Wash the dirty dishes in the sink.', dueDate: '2024-05-28', priority: 'p2', project: 'Inbox'},
    ] }, ];
    let userArr =  [ {name: 'Study', todoArray: [ {title: 'Practice Coding', description: '', dueDate: '2024-05-27', priority: 'p1', project: 'Study'} ]},
    {name: 'Work', todoArray: [ {title: 'Apply for Jobs', description: 'Send out job applications.', dueDate: '', priority: 'p1', project: 'Work'} ]} ];
    return { defaultArr, userArr };
})();

export const allOptions = (() => {
    let projectOptions = [ 'Inbox', 'Study', 'Work' ];
    return { projectOptions };
})();