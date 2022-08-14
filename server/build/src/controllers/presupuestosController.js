"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.presupuestosController = void 0;
const database_1 = __importDefault(require("../database"));
class PresupuestosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const presupuestos = yield database_1.default.query('SELECT * FROM presupuestos');
            res.json(presupuestos);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO presupuestos set ?', [req.body]);
            res.json('Presupuesto Creado');
        });
    }
    createpp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO detallePresupuesto set ?', [req.body]);
            res.json('Producto agregado');
        });
    }
    ppList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pp = yield database_1.default.query('SELECT * FROM detallePresupuesto WHERE idPresupuesto = ?', [id]);
            res.json(pp);
            ;
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM presupuestos WHERE id = ?', [id]);
            res.json({ message: "El presupuesto fue eliminado" });
        });
    }
    deleteDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM detallepresupuesto WHERE idDetalle = ?', [id]);
            res.json({ message: "El producto fue eliminado del presupuesto" });
        });
    }
}
exports.presupuestosController = new PresupuestosController();
