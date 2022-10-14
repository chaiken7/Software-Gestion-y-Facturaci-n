import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import indexRoutes from './routes/indexRoutes';
import productosRoutes from './routes/productosRoutes';
import presupuestoRoutes from './routes/presupuestoRoutes';

class Server {

    public app: Application

    constructor() { 
       this.app = express();
       this.config();
       this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/productos', productosRoutes);
        this.app.use('/api/presupuestos', presupuestoRoutes)
        this.app.use('/upload', express.static(path.resolve('upload')));
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server en puerto`, this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();