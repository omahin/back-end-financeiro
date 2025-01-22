"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChatUseCase = void 0;
class CreateChatUseCase {
    constructor(chatRepository, despesas) {
        this.chatRepository = chatRepository;
        this.despesas = despesas;
    }
    async execute(uid, messageUser) {
        const transactions = await this.despesas.findAll();
        return await this.chatRepository.open(transactions, uid, messageUser);
    }
}
exports.CreateChatUseCase = CreateChatUseCase;
