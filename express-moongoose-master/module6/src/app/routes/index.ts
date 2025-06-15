import express from "express"
import notesRouter from "./notes";
const router = express.Router()



router.use("/", notesRouter);


export default router;