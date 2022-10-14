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
const puppeteer_1 = __importDefault(require("puppeteer"));
describe('Capturas de Pantalla', () => {
    let browser;
    let page;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        browser = yield puppeteer_1.default.launch({
            headless: true,
            defaultViewport: null,
        });
        const context = yield browser.createIncognitoBrowserContext();
        page = yield context.newPage();
        yield page.goto('https://www.google.com/', { waitUntil: 'networkidle0' });
    }), 10000);
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield browser.close();
    }));
    test('Captura de Pantalla', () => __awaiter(void 0, void 0, void 0, function* () {
        yield page.pdf({
            path: './capturar.pdf',
            format: 'A4',
            printBackground: true,
            margin: {
                top: '100px',
                bottom: '100px',
                right: '30px',
                left: '30px'
            }
        });
    }), 350000);
});
