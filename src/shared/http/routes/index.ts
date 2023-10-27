import dashsRouter from "@modules/dashs/routes/dash.routes";
import { Router } from "express";

const routes = Router();

routes.use('/dashs', dashsRouter);



export default routes;
