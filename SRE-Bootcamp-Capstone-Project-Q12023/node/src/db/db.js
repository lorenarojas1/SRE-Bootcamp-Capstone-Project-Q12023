import { db } from './connectionDb';
import util from 'util';

export const findUserByUsername = async (username) => {

  db.query = util.promisify(db.query);
	try{
    const results = await db.query('SELECT * FROM users WHERE username = ?',
		[username],
		);
		const userObj = results[0];
		return userObj;

	} catch (err){
		console.error(err);
		console.log('User not found');
	}
}
