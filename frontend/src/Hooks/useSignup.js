import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';


const UseSignup = () => {

    const {  setAuthUser } = useAuthContext()
  
    const [loading, setLoading] = useState(false);

    const signup = async({fullname, username, password, confirmPassword, gender})=>{

        const success = handleInputErrors({fullname, username, password, confirmPassword, gender})

        if(!success) return ;

        try {

            const res = await fetch('/api/auth/signup' ,{
                method: 'post',
                
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({fullname, username, password , confirmPassword, gender})
            })

            if (res.ok) {
                toast.success("Signup successful!");
            } else {
                toast.error("Signup failed. Please try again.");
                return
            }

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem('user-info', JSON.stringify(data));
            setAuthUser(data)
            console.log(data);

        } catch (error) {
            toast.error("Signup failed. Please try again.");
        }
        finally {
            setLoading(false);
        }
       
    }
    return {loading, signup};
}

export default UseSignup

const handleInputErrors =({fullname, username, password, confirmPassword, gender})=>{

    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill all the fields");
        return false;
    }
    console.log({fullname, username, password, confirmPassword, gender});
    if(password !== confirmPassword){    
        toast.error("Password do not match")
        return false;
    }
    if (username.length < 3) {
        toast.error("Username must be at least 3 characters long");
        return false;
    }
    
    return true;
}