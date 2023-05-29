import {db} from "../database/database.connection.js"

export const getCidades = async (req, res) => {
    const { id } = req.params;
    try {
      let query = "SELECT * FROM cidades";
      if (id) {
        query += ` WHERE id = ${id}`;
      }
      const result = await db.query(query);
      const cidades = result.rows;
      res.json(cidades);
    } catch (error) {
      console.error('Erro ao buscar as cidades:', error);
      res.status(500).json({ error: 'Erro ao buscar as cidades' });
    }
  };