const bcrypt = require('bcrypt');
const UserRepository = require('../Repositories/UserRepository');

class AuthService {
    static async login(email, password) {
        const user = await UserRepository.getUserByEmail(email);
        if (!user) throw new Error("Email không tồn tại");

        const match = await bcrypt.compare(password, user.password); // so sánh hash
        if (!match) throw new Error("Mật khẩu không đúng");

        return user.role; // chỉ trả role
    }
}

module.exports = AuthService;
