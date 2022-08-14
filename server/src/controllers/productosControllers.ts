import { Response, Request, NextFunction } from 'express';

import pool from '../database';

class ProductosController {

    public async list (req: Request, res: Response): Promise<void> {
        const productos = await pool.query('SELECT * FROM productos');
         res.json(productos);         
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const producto = await pool.query('SELECT * FROM productos WHERE id = ?', [id])
        if (producto.length > 0) {
            return res.json(producto[0]);
        }
        res.status(404).json({text: "El juego no existe"});
        res.json(producto);
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query ('INSERT INTO productos set ?', [req.body]);
        res.json('Producto Creado');
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM productos WHERE id = ?', [id]);
        res.json('Producto eliminado');
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE productos set ? WHERE id = ?', [req.body, id]);
        res.json('Producto modificado');
    }

}

export const productosController = new ProductosController();
