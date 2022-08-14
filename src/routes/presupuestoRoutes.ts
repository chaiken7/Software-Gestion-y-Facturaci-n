import { Router } from 'express';

import { presupuestosController } from '../controllers/presupuestosController';

class PresupuestosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', presupuestosController.list);
        this.router.post('/', presupuestosController.create);
        this.router.get('/dp/:id', presupuestosController.ppList);
        this.router.post('/dp/pp', presupuestosController.createpp)
        this.router.delete('/delete/:id', presupuestosController.delete);
        this.router.delete('/dp/delete/:id', presupuestosController.deleteDetalle);
    }
}

const presupuestosRoutes = new PresupuestosRoutes();
export default presupuestosRoutes.router;