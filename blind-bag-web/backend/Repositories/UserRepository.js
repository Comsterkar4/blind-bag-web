const db = require('../../database');
const bcrypt = require('bcrypt');

class UserRepository {

    // Lấy tất cả người dùng
    static getAllUser() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users ORDER BY id ASC", (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }

    // Thêm user mới (hash password)
    static async addUser(user) {
        const { email, password } = user;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        return new Promise((resolve, reject) => {
            const query = `INSERT INTO users (email, password) VALUES (?, ?)`;
            db.query(query, [email, hashedPassword], (err, result) => {
                if (err) return reject(err);
                resolve({ id: result.insertId, email });
            });
        });
    }

    // Lấy user theo id
    static getUserById(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE id = ?';
            db.query(query, [id], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]); // trả về 1 user
            });
        });
    }

    // Lấy user theo email
    static getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE email = ?';
            db.query(query, [email], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]); // trả về user đầu tiên nếu có
            });
        });
    }

    // Cập nhật user (hash password nếu có)
    static async updateUser(id, data) {
        const currentUser = await UserRepository.getUserById(id);
        if (!currentUser) throw new Error("User không tồn tại");

        // Merge dữ liệu mới với dữ liệu cũ
        const updatedUser = {
            password: currentUser.password,
  full_name: data.full_name || currentUser.full_name,
            phone: data.phone || currentUser.phone,
            avatar: data.avatar || currentUser.avatar,
            role: data.role || currentUser.role
        };

        // Hash password nếu có password mới
        if (data.password) {
            const salt = await bcrypt.genSalt(10);
            updatedUser.password = await bcrypt.hash(data.password, salt);
        }

        const query = `
            UPDATE users
            SET password=?, full_name=?, phone=?, avatar=?, role=?
            WHERE id=?
        `;

        return new Promise((resolve, reject) => {
            db.query(
                query,
                [
                    updatedUser.password,
                    updatedUser.full_name,
                    updatedUser.phone,
                    updatedUser.avatar,
                    updatedUser.role,
                    id
                ],
                (err, result) => {
                    if (err) return reject(err);
                    resolve({ id: parseInt(id), ...updatedUser });
                }
            );
        });
    }
}

module.exports = UserRepository;
