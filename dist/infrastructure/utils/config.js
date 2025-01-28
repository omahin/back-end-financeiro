"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureDependencies = configureDependencies;
const repository_1 = require("../database/repository");
const create_despesa_use_case_1 = require("../../application/use-cases/create-despesa-use-case");
const get_despesas_by_user_use_case_1 = require("../../application/use-cases/get-despesas-by-user-use-case");
const despesa_controller_1 = require("../../interface/despesa-controller");
const repository_2 = require("../genai/repository");
const chat_controller_1 = require("../../interface/chat-controller");
const create_chat_use_case_1 = require("../../application/use-cases/create-chat-use-case");
function configureDependencies() {
    const despesaRepository = new repository_1.RepositoryData();
    const createDespesaUseCase = new create_despesa_use_case_1.CreateDespesaUseCase(despesaRepository);
    const listAllDespesasUseCase = new get_despesas_by_user_use_case_1.GetDespesasByUserUseCase(despesaRepository);
    const chatRepository = new repository_2.RepositoryAI();
    const createChatUseCase = new create_chat_use_case_1.CreateChatUseCase(chatRepository, despesaRepository);
    const despesaController = new despesa_controller_1.DespesaController(createDespesaUseCase, listAllDespesasUseCase);
    const chatController = new chat_controller_1.ChatController(createChatUseCase);
    return {
        despesaController,
        chatController
    };
}
