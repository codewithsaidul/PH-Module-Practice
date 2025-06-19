import express from "express"
import { addUser, deleteUser, getSingleUser, getUsers, updateUser } from "../controllers/user.controllers";
const userRouter = express.Router();



userRouter.get("/", getUsers);
userRouter.get("/:userId", getSingleUser);
userRouter.patch("/updateUser/:userId", updateUser);
userRouter.delete("/deleteUser/:userId", deleteUser);
userRouter.post("/create-user", addUser);


export default userRouter;