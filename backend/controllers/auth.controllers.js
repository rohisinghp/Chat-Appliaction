import bcrypt from 'bcrypt';
import User from "../models/user.model.js";
import generateToken from '../utils/generateTokens.js';

export const signup = async (req, res) => {

    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        // console.log({fullname, username, password, confirmPassword, gender});

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords is not matching" });
        }


        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        //HASH PASSWORD HERE
        const hashedPassword = await bcrypt.hash(password, 10);


        const boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlpic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boypic : girlpic
        });
        generateToken(newUser._id, res);
        await newUser.save();
        return res.status(201).json(newUser);
    }

    catch (error) {

        console.error("Error in signup:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {

    try {
        const {username , password} = req.body;

        const existingUser = await User.findOne({
            username
        })

        if(existingUser){
            
            const isMatch = await bcrypt.compare(password, existingUser.password);
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid credentials" });
            }
            generateToken(existingUser._id, res);
            return res.status(200).json({ message: "User logged in successfully" });
        }
        return res.status(400).json({ error: "User not found" });
    }
    catch (error) {

        console.error("Error in signup:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const logout = (req, res) => {
    
    try{
        res.cookie('jwt', '', { maxAge: 0 });
        return res.status(200).json({ message: "User logged out successfully" });
    }
    catch(error){
        console.log('error in logout controller ', error.message);
        res.status(500).json({ error: "Internal server error" });
    }
    
};