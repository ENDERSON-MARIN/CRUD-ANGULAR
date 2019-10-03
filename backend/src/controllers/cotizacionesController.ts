import { Request, Response } from 'express';


import pool from '../database';

class CotizacionesController {

    public async list(req: Request, res: Response): Promise<void> {
        const cotizaciones = await pool.query('SELECT * FROM PtblCotización ORDER BY cot DESC LIMIT 5');
        res.json(cotizaciones);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const cotizaciones = await pool.query('SELECT * FROM PtblCotización WHERE cot = ?', [id]);
        console.log(cotizaciones.length);
        if (cotizaciones.length > 0) {
            return res.json(cotizaciones[0]);
        }
        res.status(404).json({ text: "Cotización no encontrada, por favor verifique" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO PtblCotización set ?', [req.body]);
        res.json({ message: 'La Cotización fué guardada exitosamente!' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE PtblCotización set ? WHERE cot = ?', [req.body, id]);
        res.json({ message: "Cotización Actualizada con Exito!" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM PtblCotización WHERE cot = ?', [id]);
        res.json({ message: "Cotización Eliminada Exitosamente! " });
    }
}

const cotizacionesController = new CotizacionesController;
export default cotizacionesController;