import express from "express";
import AuthanticationController from "../controllers/authentication_controller";
import signupValidator from "../middlewares/authMiddlewares/signup_validator";
import signinValidator from "../middlewares/authMiddlewares/signin_validator";

const router = express.Router();
router.post("/signup", signupValidator, AuthanticationController.register);
router.post("/signin", signinValidator, AuthanticationController.login);

export default router;