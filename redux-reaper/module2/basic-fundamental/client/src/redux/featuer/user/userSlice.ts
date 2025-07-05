import type { RootState } from "@/redux/store";
import type { IUser } from "@/types/index.types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "BdcRx8apNC1AOqFpzQvLT",
      name: "SAIDUL ISLAM RANA",
    },
    {
      id: "ISTiwPLOaZk30miHHIy13",
      name: "Saidul",
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export default userSlice.reducer;

export const { addUser, deleteUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.users;
