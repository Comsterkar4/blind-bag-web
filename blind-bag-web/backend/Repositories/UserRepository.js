const db = require('../../database');

class UserRepository {
    // lấy thấy cả các danh sách người dùng 
    static getAllUser() {

        return new Promise((resolve, reject) =>{
            db.query("SELECT * FROM users ORDER BY id ASC", (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
}
module.exports = UserRepository;