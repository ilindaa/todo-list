// Factory over class here to avoid inheritance (focus on composition)
// project holds a todo array, the array holds todos
export const projectFactory = (name, todoArray) => {
    return { name, todoArray };
}

// Module Pattern
export const allProjects = (() => {
    let array =  [ {name: 'Inbox', todoArray: []} ];
    return { array };
})();