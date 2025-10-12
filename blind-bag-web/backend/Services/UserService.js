const bcrypt = require('bcrypt');
const UserRepository = require('../Repositories/UserRepository');

class UserService {
    static async listUser(){
        return await UserRepository.getAllUser();
    }
    static async createUser(user) {
        const hashedPassword = await bcrypt.hash(user.password, 10); // 10 rounds
        user.password = hashedPassword;
        return await UserRepository.addUser(user);
    }

    static async updateUser(id, data) {
        // data ở đây chính là object JSON từ req.body
        return await UserRepository.updateUser(id, data); // ✅ truyền đầy đủ id + data
    }
}

module.exports = UserService;