const UserService = require('../Services/UserService');
const User = require('../Models/User');
const UserDTO = require ('../Models/UserDTO');

class UserController {
     // list danh sach 
     static async getUser(req,res){
        try {
            const user = await UserService.listUser();
            res.json(user);
        }catch (err) {
            res.status(500).json({error: err.message});
        }
     }
     static async addUser(req, res) {
        try {
            console.log("POST body:", req.body);

            const newUser = new User(req.body.email, req.body.password);
            const savedUser = await UserService.createUser(newUser);
            const userResponse = new UserDTO(savedUser);

            res.status(201).json(userResponse);
        } catch (err) {
            console.error("Lỗi khi tạo người dùng:", err);
            res.status(500).json({ error: err.message });
        }
    }
    static async updateUser(req, res) {
    try {
        const { id } = req.params;
        const data = req.body; // object JSON từ Postman
        const updatedUser = await UserService.updateUser(id, data); // ✅ truyền data
        res.status(200).json(updatedUser);
    } catch (err) {
        console.error("Lỗi khi cập nhật user:", err);
        res.status(500).json({ error: err.message });
    }
}  
} 

module.exports = UserController;