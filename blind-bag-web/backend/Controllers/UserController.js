const UserService = require('../Services/UserService');

class UserController {
     // list danh sach 
     static async getUser(req,res){
        try {
            const user = await UserService.listUser();
            res.json(user);
        }catch (err) {
            res.statust(500).json({error: err.message});
        }
     }
} 

module.exports = UserController;