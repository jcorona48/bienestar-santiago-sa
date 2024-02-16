import type { Request, Response } from "express";
import db from "@/db";
import type { Medico } from "@/types/medicos";

export const getMedicos = async (req: Request, res: Response) => {
    const medicos = await db.medico.findMany();
    return res.json(medicos);
};

export const getMedico = async (req: Request, res: Response) => {
    const { id } = req.params;
    const medico = await db.medico.findUnique({
        where: { id: id },
    });
    return res.json(medico);
};

export const createMedico = async (req: Request, res: Response) => {
    const body: Medico = req.body;

    const medico = await db.medico.create({
        data: {
            ...body,
        },
    });

    return res.json(medico);
};

export const updateMedico = async (req: Request, res: Response) => {
    const { id } = req.params;
    const body: Medico = req.body;

    const medico = await db.medico.update({
        where: { id: id },
        data: {
            ...body,
        },
    });

    return res.json(medico);
};

export const deleteMedico = async (req: Request, res: Response) => {
    const { id } = req.params;
    await db.medico.delete({
        where: { id: id },
    });
    return res.json({ message: "Medico deleted" });
};
