import type { RootState } from "@/redux/store";
import type { TaskInterface } from "@/types/index.types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "../user/userSlice";

interface InitialState {
  tasks: TaskInterface[];
  filter: "All" | "High" | "Meduim" | "Low";
}

type DraftTask = Pick<
  TaskInterface,
  "title" | "description" | "dueDate" | "priority" | "assignToUser"
>;

const createTask = (taskData: DraftTask): TaskInterface => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignToUser: taskData.assignToUser ? taskData.assignToUser : null,
  };
};

const initialState: InitialState = {
  tasks: [
    {
      id: "QUjbJXTgWAAkOUasiJc-B",
      isCompleted: false,
      title: "Simple Todo App",
      description:
        "Make a SImple Todo App with React, Node, Express, Mongoose, MongoDB",
      priority: "Low",
      assignToUser: "BdcRx8apNC1AOqFpzQvLT",
      dueDate: "2025-07-09T18:00:00.000Z",
    },
  ],
  filter: "All",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskInterface>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompletedState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks  = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (state, action: PayloadAction<"All" | "Low" | "Meduim" | "High" >) => {
      state.filter = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) => task.assignToUser === action.payload ? task.assignToUser = null : task)
    })
  },
});

export default taskSlice.reducer;

export const { addTask, toggleCompletedState, deleteTask, updateFilter } = taskSlice.actions;

export const selectTask = (state: RootState) => {

  const filter = state.todo.filter;

  switch (filter) {
    case "Low":
        return state.todo.tasks.filter(task => task.priority === "Low")
    case "Meduim":
        return state.todo.tasks.filter(task => task.priority === "Meduim")
    case "High":
        return state.todo.tasks.filter(task => task.priority === "High")
    default:
      return state.todo.tasks;
  }

};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
