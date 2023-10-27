import { Router } from "express";
import DashsController from "../controllers/DashsController";

const dashsRouter = Router();
const dashsController = new DashsController();

dashsRouter.post('/', dashsController.create);

export default dashsRouter;
