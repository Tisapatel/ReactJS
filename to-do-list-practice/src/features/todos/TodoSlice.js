import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState:
     [
        
     ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodos: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodos } = todosSlice.actions;

export default todosSlice.reducer;
