"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const presupuestosController_1 = require("../controllers/presupuestosController");
class PresupuestosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', presupuestosController_1.presupuestosController.list);
        this.router.post('/', presupuestosController_1.presupuestosController.create);
        this.router.get('/dp/:id', presupuestosController_1.presupuestosController.ppList);
        this.router.post('/dp/pp', presupuestosController_1.presupuestosController.createpp);
        this.router.delete('/delete/:id', presupuestosController_1.presupuestosController.delete);
        this.router.delete('/dp/delete/:id', presupuestosController_1.presupuestosController.deleteDetalle);
    }
}
const presupuestosRoutes = new PresupuestosRoutes();
exports.default = presupuestosRoutes.router;
