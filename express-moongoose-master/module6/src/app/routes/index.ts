import express from "express"
import notesRouter from "./notes";
import userRouter from "./user";
const router = express.Router()



router.use("/notes", notesRouter);
router.use("/users", userRouter);


export default router;