// Factory over class here to avoid inheritance (focus on composition)
// project holds a todo array, the array holds todos
export const projectFactory = (name, todoArray) => {
    return { name, todoArray };
}

// Module Pattern
export const allProjects = (() => {
    let defaultArr = [ {name: 'Inbox', todoArray: [ {title: 'Test1', description: 'D1', dueDate: '2023-08-06', priority: 'p1', project: 'Inbox'}, 
    {title: 'Test2', description: 'D2', dueDate: '', priority: 'p2', project: 'Inbox'},
    {title: 'Test5', description: 'D3', dueDate: '2023-08-18', priority: 'p3', project: 'Inbox'},
    ] }, ];
    let userArr =  [ {name: 'Pog', todoArray: [ {title: 'Test3', description: 'D4', dueDate: '2023-08-17', priority: 'p4', project: 'Pog'} ]},
    {name: 'Test', todoArray: [ {title: 'Test4', description: 'D5', dueDate: '2023-08-17', priority: 'p4', project: 'Test'} ]} ];
    return { defaultArr, userArr };
})();