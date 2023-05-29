import { Router } from "express";
import {getCidades} from "../controllers/cidades.controllers.js"

const cityRouter = Router()

cityRouter.get("./cidades", getCidades)

export default cityRouter