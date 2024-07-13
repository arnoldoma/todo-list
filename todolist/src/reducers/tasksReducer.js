export const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case "create":
            return [...state, action.payload]
        case "edit":
            // return state.filter(task => (task.id !== action.payload) ? console.log( "Ingresado" ) : console.log( "No ingresado" ));
            // setUsers(users.map(user => (user.id === id ? updateUser : user)))

        //    return console.log( action.payload.id )
            // return [...state, updateTask];
            // return [...state, action.payload]

            return state.map(t => {
                if (t.id === action.payload.id) {
                    return action.payload;
                } else {
                    return t;
                }
            });
        case "delete":
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
}