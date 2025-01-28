"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDespesasByUserUseCase = void 0;
class GetDespesasByUserUseCase {
    constructor(despesaRepository) {
        this.despesaRepository = despesaRepository;
    }
    async execute(userId) {
        const allDespesas = await this.despesaRepository.findAll();
        const despesasByUser = allDespesas.filter(despesa => despesa.userId === userId);
        return despesasByUser;
    }
}
exports.GetDespesasByUserUseCase = GetDespesasByUserUseCase;
