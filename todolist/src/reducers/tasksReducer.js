export const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case "create":
            return [...state, action.payload]
        case "edit":
            return state.filter(task => task.id !== action.payload);
        case "delete":
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
}