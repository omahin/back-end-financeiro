"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesaController = void 0;
class DespesaController {
    constructor(createDespesaUseCase, getDespesasByUserUseCase) {
        this.createDespesaUseCase = createDespesaUseCase;
        this.getDespesasByUserUseCase = getDespesasByUserUseCase;
    }
    create(req, res) {
        const params = req.body;
        const despesa = this.createDespesaUseCase.execute(params);
        res.status(201).json(despesa);
    }
    async getAll(req, res) {
        const userId = req.params.userId;
        const despesas = await this.getDespesasByUserUseCase.execute(userId);
        res.json(despesas);
    }
}
exports.DespesaController = DespesaController;
