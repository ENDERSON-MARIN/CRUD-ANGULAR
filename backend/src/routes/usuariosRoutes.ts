import express, { Router } from 'express';

import usuariosController from '../controllers/usuariosController';

class UsuariosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    } 

    config(): void {
        this.router.get('/', usuariosController.list);
        this.router.post('/', usuariosController.create);
        this.router.get('/:id', usuariosController.getOne);
        this.router.put('/:id', usuariosController.update);
        this.router.delete('/:id', usuariosController.delete);
    }

}

export default new UsuariosRoutes().router;
