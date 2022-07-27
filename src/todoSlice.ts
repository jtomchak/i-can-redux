import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

function getRandomId() {
  return Math.floor(Math.random() * 100000);
}

export interface TodoState {
  id: number;
  title: string;
}

interface TodoInput {
  title: string;
}

export type TodosState = TodoState[];

const initialState: TodosState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoInput>) => {
      return [...state, { ...action.payload, id: getRandomId() }];
    },
    remove: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// dispatch(todo.add, {title: 'milk & bread'})
// Actions & Reducer

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
