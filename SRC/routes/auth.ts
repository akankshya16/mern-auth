import express from "express"
import { AuthController } from "../controllers/AuthController";


const router= express.Router();



const _AuthController= new AuthController()

router.post("/register", _AuthController.register)
export default router;
 