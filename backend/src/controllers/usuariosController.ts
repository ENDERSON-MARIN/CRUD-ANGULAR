import { Request, Response } from 'express';


import pool from '../database';

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query('SELECT * FROM tblUsuario ORDER BY Cedula DESC LIMIT 10');
        res.json(usuarios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const usuarios = await pool.query('SELECT * FROM tblUsuario WHERE Cedula = ?', [id]);
        console.log(usuarios.length);
        if (usuarios.length > 0) {
            return res.json(usuarios[0]);
        }
        res.status(404).json({ text: "The User doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO tblUsuario set ?', [req.body]);
        res.json({ message: 'User Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE tblUsuario set ? WHERE Cedula = ?', [req.body, id]);
        res.json({ message: "The User was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM tblUsuario WHERE id = ?', [id]);
        res.json({ message: "The user was deleted" });
    }
}

const usuariosController = new UsuariosController;
export default usuariosController;