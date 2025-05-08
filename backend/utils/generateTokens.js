import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

const generateToken = (userId , res ) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });   
    res.cookie('jwt', token, { httpOnly: true });        
   
};

export default generateToken;