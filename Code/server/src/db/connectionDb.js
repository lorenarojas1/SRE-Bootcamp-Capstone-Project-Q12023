import mysql from 'mysql';
import { config } from '../config';

const initDb = () => {
	const dbParams = {
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    port: config.DB_PORT,
  };

  const connectionDb = mysql.createConnection(dbParams);

  connectionDb.connect((err) => {
    if (err) {
      console.error(`Error de conexion: ${err.stack}`);
      return;
    }
    console.log(`Conectado a la base de datos`);
  });
  return connectionDb;

};




export const db = initDb();


let sql = 'SELECT * FROM users';
db.query(sql, (err, results, _) => {
  if (err) {
    return console.log.error(err.message);
  }
console.log(results)
});
