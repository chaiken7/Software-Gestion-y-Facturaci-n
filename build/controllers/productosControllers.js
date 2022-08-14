"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.productosController = void 0;
const database_1 = __importDefault(require("../database"));
class ProductosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield database_1.default.query('SELECT * FROM productos');
            res.json(productos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const producto = yield database_1.default.query('SELECT * FROM productos WHERE id = ?', [id]);
            if (producto.length > 0) {
                return res.json(producto[0]);
            }
            res.status(404).json({ text: "El juego no existe" });
            res.json(producto);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO productos set ?', [req.body]);
            res.json('Producto Creado');
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM productos WHERE id = ?', [id]);
            res.json('Producto eliminado');
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE productos set ? WHERE id = ?', [req.body, id]);
            res.json('Producto modificado');
        });
    }
    renderPDF(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = yield browser.newPage();
                const response = yield page.goto('https://duckduckgo.com/', {
                    waitUntil: 'networkidle2'
                });
                const pdfBuffer = yield page.pdf({ format: 'A4', printBackground: true });
                res.send(pdfBuffer);
                console.log('PDF Salio bien!!!');
                yield browser.close();
            }
            catch (_a) {
                console.log('Our Error');
            }
        });
    }
    ;
}
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const page = yield browser.newPage();
            yield page.setContent('<h1>HOLAAA</h1>');
            yield page.pdf({ path: 'example.pdf', format: 'A4', printBackground: true });
            console.log('PDF con Exito');
            yield browser.close();
            process.exit();
        }
        catch (_a) {
            console.log('Error');
        }
    });
})();
exports.productosController = new ProductosController();
