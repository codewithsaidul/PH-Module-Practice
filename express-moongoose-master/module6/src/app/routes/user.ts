import express from "express"
import { addUser, deleteUser, getSingleUser, getUsers, updateUser } from "../controllers/user.controllers";
const userRouter = express.Router();



userRouter.post("/create-user", addUser);
userRouter.get("/", getUsers);
userRouter.get("/:userId", getSingleUser);
userRouter.patch("/updateUser/:userId", updateUser);
userRouter.delete("/deleteUser/:userId", deleteUser);


export default userRouter;