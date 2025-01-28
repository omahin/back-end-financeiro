import { DespesaRepository } from '../../application/repositores/depesa-repository'
import { Despesa } from '../../domain/despesa';
import { DespesaModel } from './model';

export class RepositoryData implements DespesaRepository {
    async findById(despesaId: string): Promise<Despesa | null> {
        const despesa = await DespesaModel.findById(despesaId);
        if (!despesa) {
            return null;
        }
        return {
            id: despesa._id.toString(),
            descricao: despesa.descricao,
            categoria: despesa.categoria,
            valor: despesa.valor,
            tipo: despesa.tipo,
            data: despesa.data,
            userId: despesa.userId
        } as Despesa;
    }

    async delete(despesaId: string): Promise<void> {
        await DespesaModel.findByIdAndDelete(despesaId);
    }

    async save(despesa: Despesa): Promise<void> {
        const newDespesa = new DespesaModel(despesa);
        await newDespesa.save();
    }

    async findAll(): Promise<Array<Despesa>> {
        const despesas = await DespesaModel.find();
        const translatedDespesas = despesas.map(item => {
            return {
                id: item._id.toString(),
                descricao: item.descricao,
                categoria: item.categoria,
                valor: item.valor,
                tipo: item.tipo,
                data: item.data,
                userId: item.userId
            } as Despesa;
        });
        return translatedDespesas;
    }
}