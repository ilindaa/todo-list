// Factory over class here to avoid inheritance (focus on composition)
// project holds a todo array, the array holds todos
export const projectFactory = (title, todoArray) => {
    return { title, todoArray };
}
