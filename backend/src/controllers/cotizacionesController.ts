import { Request, Response } from 'express';


import pool from '../database';

class CotizacionesController {

    public async list(req: Request, res: Response): Promise<void> {
        const cotizaciones = await pool.query('SELECT * FROM ptblcotización ORDER BY cot DESC LIMIT 5');
        res.json(cotizaciones);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const cotizaciones = await pool.query('SELECT * FROM ptblcotización WHERE cot = ?', [id]);
        console.log(cotizaciones.length);
        if (cotizaciones.length > 0) {
            return res.json(cotizaciones[0]);
        }
        res.status(404).json({ text: "The Cotización doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ptblcotización set ?', [req.body]);
        res.json({ message: 'Cotizacion Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE ptblcotización set ? WHERE cot = ?', [req.body, id]);
        res.json({ message: "The cotizacion was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ptblcotización WHERE cot = ?', [id]);
        res.json({ message: "The cotizacion was deleted" });
    }
}

const cotizacionesController = new CotizacionesController;
export default cotizacionesController;