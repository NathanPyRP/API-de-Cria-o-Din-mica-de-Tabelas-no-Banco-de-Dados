import { Request, Response } from "express";
import { DynamicTableService } from "../services/CreateDynamicTableService";


export default class DashsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { Table, Fields, Conteudo } = request.body;
  
      const createDynamicTable = new DynamicTableService();
      await createDynamicTable.createTableFromJSON({ Fields, Conteudo }, Table);
      console.log(createDynamicTable)
      return response.json({ message: `Tabela ${Table} criada com sucesso` });
    } catch (error) {
      return response.status(500).json({ error: "Erro ao criar a tabela dinâmica" });
    }
  }
}
