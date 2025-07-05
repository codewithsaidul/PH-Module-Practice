import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featuer/counter/counterSlice";
import taskReducer from "./featuer/task/taskSlice";
import userReducer from "./featuer/user/userSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    counter: counterReducer,
    todo: taskReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
