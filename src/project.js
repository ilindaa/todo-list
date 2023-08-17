// Factory over class here to avoid inheritance (focus on composition)
// project holds a todo array, the array holds todos
export const projectFactory = (name, todoArray) => {
    return { name, todoArray };
}

// Module Pattern
export const allProjects = (() => {
    let defaultArr = [ {name: 'Inbox', todoArray: [ {title: 'Test1', description: '', dueDate: '2023-08-06', priority: '', project: 'Inbox'}, 
    {title: 'Test2', description: '', dueDate: '', priority: '', project: 'Inbox'},
    ] }, ];
    let userArr =  [ {name: 'Pog', todoArray: [ {title: 'Test3', description: '', dueDate: '2023-08-17', priority: '', project: 'Pog'} ]},
    {name: 'Test', todoArray: [ {title: 'Test4', description: '', dueDate: '2023-08-17', priority: '', project: 'Test'} ]} ];
    return { defaultArr, userArr };
})();