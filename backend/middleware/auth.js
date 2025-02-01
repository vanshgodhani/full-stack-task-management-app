import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized, login again' });
    }

    try {
        const secret = 'vanshmoms'; // Hardcoded secret
        const token_decode = jwt.verify(token, secret); // Use the hardcoded secret
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
}

export default authMiddleware;
