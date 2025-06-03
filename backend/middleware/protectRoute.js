import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {

    try {
        const token = req.cookies.jwt;
        if (!token)
            return res.status(403).send({ error: 'No token provided.' });
 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        if (!decoded) {
            return res.status(401).send({ error: 'Unauthorized access.: invalid token' });
        }
       
        const user = await User.findById(decoded.userId).select("-password");
        // console.log(user);
        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        }

        req.user = user;
        next();
    }
    catch (error) {
        return res.status(500).send({ error: 'Internal server error', details: error.message });
    }
}

export default protectRoute