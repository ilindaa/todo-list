// notes: person can put down the notes they have about their project
// checklist: person can make their notes a checklist or not
export const todoFactory = (title, description, dueDate, priority, notes, checklist) => {
    return { title, description, dueDate, priority, notes, checklist };
};
