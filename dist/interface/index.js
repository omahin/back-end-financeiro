"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("../infrastructure/utils/config");
const connection_1 = require("../infrastructure/database/connection");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
(0, connection_1.connectDB)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
const { despesaController, chatController } = (0, config_1.configureDependencies)();
exports.app.post('/despesas', (req, res) => despesaController.create(req, res));
exports.app.get('/despesas/:userId', (req, res) => despesaController.getAll(req, res));
exports.app.post('/chat', (req, res) => chatController.open(req, res));
if (require.main === module) {
    const PORT = process.env.PORT || 3333;
    exports.app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}
