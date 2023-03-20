// import { db } from './connectionDb';
import util from 'util';

const db = {};

export const findUserByUsername = async (username) => {
	db.query = util.promisify(db.query);
			let results = await db.query('SELECT username, salt, role, password FROM users WHERE username = ?',
			[username])
			return results[0]
}
