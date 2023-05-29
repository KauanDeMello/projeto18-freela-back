import { Router } from "express"
import cityRouter from "./cidadesRoute.js"

const router = Router()
router.use(cityRouter)

export default router
