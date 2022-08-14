import { Router } from 'express';
import { productosController } from '../controllers/productosControllers';

class ProductosRoutes {

   public router: Router = Router();

   constructor(){
    this.config();
   }

   config(): void{
       this.router.get('/', productosController.list);
       this.router.get('/:id', productosController.getOne);
       this.router.post('/', productosController.create);
       this.router.delete('/:id', productosController.delete);
       this.router.put('/:id', productosController.update);
   }
}

const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;