function authMiddleware(req, res, next) {
    const user = req.user; // từ session hoặc token
    if (!user) return res.status(401).json({ error: "Bạn chưa đăng nhập" });
    next();
}
