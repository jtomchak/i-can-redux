import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  title: string;
}

export type TodosState = TodoState[];

const initialState: TodosState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoState>) => {
      return [...state, action.payload];
    },
  },
});

// dispatch(todo.add, {title: 'milk & bread'})
// Actions & Reducer

export const { add } = todoSlice.actions;
export default todoSlice.reducer;
