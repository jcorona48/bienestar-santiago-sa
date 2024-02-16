import routerMedico from "./medico.routes";
import { Router } from "express";

const routes = Router();

routes.use("/medicos", routerMedico);

export default routes;
