import { getMedicos } from "@/controllers/medico.controllers";
import { Router } from "express";

const routerMedico = Router();

routerMedico.get("/", getMedicos);

export default routerMedico;
