const express = require ('express');
const cors = require('cors');
const routes = require ('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar / listar uma informação do Back-end
  * POST: Criar uma informação no Back-end
  * PUT: Alterar uma informação no Back-end
  * DELETE: Deletar uma informação no Back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" ( Filtros, paginação )
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MyQSL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoQSL: mongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query builder: table('users').select('*').where()
 */



