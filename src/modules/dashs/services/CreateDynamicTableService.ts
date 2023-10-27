import { getManager } from 'typeorm';

export class DynamicTableService {
  async createTableFromJSON(data: Record<string, any>, tableName: string): Promise<void> {
    const entityManager = getManager();

    if (!data || !data.Fields || !data.Conteudo || data.Fields.length === 0) {
      throw new Error('JSON inválido. Certifique-se de que Fields e Conteudo estejam definidos corretamente.');
    }

    const fields = data.Fields;
    const conteudo = data.Conteudo;

    // Excluir a tabela se ela já existir
    await entityManager.query(`DROP TABLE IF EXISTS ${tableName}`);

    // Criar a tabela dinâmica com as colunas especificadas em "Fields"
    const createTableQuery = `
      CREATE TABLE ${tableName} (
        id SERIAL PRIMARY KEY,
        ${fields.map((field: any) => `"${field.campo}" ${field.Tipo}`).join(',\n')}
      )
    `;

    await entityManager.query(createTableQuery);

    // Inserir os dados na tabela
    for (const row of conteudo) {
      const fieldNames = fields.map((field: any) => `"${field.campo}"`).join(', ');
      const fieldValues = fields.map((field: any) => `$${fields.indexOf(field) + 1}`).join(', ');

      const insertQuery = `
        INSERT INTO ${tableName} (${fieldNames})
        VALUES (${fieldValues})
      `;

      try {
        const insertValues = fields.map((field: any) => row[field.campo]);
        await entityManager.query(insertQuery, insertValues); // Passar os valores como um array
      } catch (error) {
        console.error('Erro na inserção de dados:', error);
      }
    }
  }
}
