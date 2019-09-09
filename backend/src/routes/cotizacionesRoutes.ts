import express, { Router } from 'express';

import cotizaciones from '../controllers/cotizacionesController';

class CotizacionesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    } 

    config(): void {
        this.router.get('/', cotizaciones.list);
        this.router.post('/', cotizaciones.create);
        this.router.get('/:id', cotizaciones.getOne);
        this.router.put('/:id', cotizaciones.update);
        this.router.delete('/:id', cotizaciones.delete);
    }

}

export default new CotizacionesRoutes().router;
