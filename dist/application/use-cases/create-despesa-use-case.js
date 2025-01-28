"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDespesaUseCase = void 0;
class CreateDespesaUseCase {
    constructor(despesaRepository) {
        this.despesaRepository = despesaRepository;
    }
    execute(despesaParams) {
        const despesa = Object.assign({}, despesaParams);
        this.despesaRepository.save(despesa);
        return despesa;
    }
}
exports.CreateDespesaUseCase = CreateDespesaUseCase;
