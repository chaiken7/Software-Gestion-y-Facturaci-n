"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosControllers_1 = require("../controllers/productosControllers");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productosControllers_1.productosController.list);
        this.router.get('/:id', productosControllers_1.productosController.getOne);
        this.router.post('/', productosControllers_1.productosController.create);
        this.router.delete('/:id', productosControllers_1.productosController.delete);
        this.router.put('/:id', productosControllers_1.productosController.update);
        this.router.get('/lista/l', productosControllers_1.productosController.renderPDF);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
