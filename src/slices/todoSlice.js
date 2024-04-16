import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TodoService from "../services/todoService";

const service = TodoService();

export const getTodosAction = createAsyncThunk('todo/getTodo', async () => {
    return await service.getAll();
});

export const postTodoAction = createAsyncThunk('todo/postTodo', async (payload, thunkAPI) => {
    const response = await service.create(payload);
    await thunkAPI.dispatch(getTodosAction());
    return response;
});

export const putTodoAction = createAsyncThunk('todo/putTodo', async (payload, thunkAPI) => {
    const response = await service.update(payload);
    await thunkAPI.dispatch(getTodosAction());
    return response;
});

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        todo: null,
        isLoading: false,
        message: '',
    },
    reducers: {
        add: (state, { payload }) => {
            state.todos.push(payload);
        },
        remove: (state, { payload }) => {
            state.todos = state.todos.filter(todo => todo.id !== payload)
        },
        selectedTodo: (state, { payload }) => {
            state.todo = payload;
        },
        update: (state, { payload }) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    return { ...payload };
                }
                return todo;
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodosAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTodosAction.fulfilled, (state, { payload }) => {
            console.log(payload);
            state.todos = payload;
            state.isLoading = false;
        });
        builder.addCase(getTodosAction.rejected, (state) => {
            state.isLoading = false;
        });

        builder.addCase(postTodoAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(postTodoAction.fulfilled, (state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
        });
        builder.addCase(postTodoAction.rejected, (state) => {
            state.isLoading = false;
        });

        builder.addCase(putTodoAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(putTodoAction.fulfilled, (state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
        });
        builder.addCase(putTodoAction.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export const { add, remove, selectedTodo, update } = todoSlice.actions;

export default todoSlice;