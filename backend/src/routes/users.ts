import { Router } from "express";
import usersController from "../controllers/users.ts"

const router = Router()

router.post("/", usersController.createUser)
router.get("/:id", usersController.getUser)

export default router