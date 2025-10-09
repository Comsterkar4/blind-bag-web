const UserRepository = require('../Repositories/UserRepository');

class UserService {
    static async listUser(){
        return await UserRepository.getAllUser();
    }
}

module.exports = UserService;