const AuthService = require('../Services/AuthService');

class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const role = await AuthService.login(email, password); // chỉ trả role

            res.status(200).json({ role });
        } catch (err) {
            res.status(401).json({ error: err.message });
        }
    }
}

module.exports = AuthController;
