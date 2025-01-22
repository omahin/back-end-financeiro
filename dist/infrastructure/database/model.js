"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesaModel = void 0;
const mongoose_1 = require("mongoose");
const DespesaSchema = new mongoose_1.Schema({
    descricao: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    valor: {
        type: Number,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    data: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    }
});
exports.DespesaModel = (0, mongoose_1.model)('despesas', DespesaSchema);
