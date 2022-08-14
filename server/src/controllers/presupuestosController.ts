import {json, Request, Response } from 'express';

import pool from '../database'

class PresupuestosController {
    public async list (req: Request, res: Response): Promise<void>{
        const presupuestos = await pool.query('SELECT * FROM presupuestos');
        res.json(presupuestos);
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query ('INSERT INTO presupuestos set ?', [req.body]);
        res.json('Presupuesto Creado');
    }

    public async createpp (req: Request, res: Response): Promise<void>{
        await pool.query ('INSERT INTO detallePresupuesto set ?', [req.body]);
        res.json('Producto agregado');
    }

    public async ppList (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const pp = await pool.query('SELECT * FROM detallePresupuesto WHERE idPresupuesto = ?', [id]);
        res.json(pp);;
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM presupuestos WHERE id = ?', [id]);
        res.json({ message: "El presupuesto fue eliminado" });
    }
    public async deleteDetalle (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM detallepresupuesto WHERE idDetalle = ?', [id]);
        res.json({ message: "El producto fue eliminado del presupuesto" });
    }
}
export const presupuestosController = new PresupuestosController();