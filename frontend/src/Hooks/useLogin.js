import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../context/AuthContext.'

const useLogin = () => {

    const { setAuthUser } = useContext(AuthContext)

    const [loading, setLoading] = useState(false)

    const login = async (username, password) => {

        setLoading(true)

        if (!username || !password) {
            toast.error("Please fill all the fields")
            setLoading(false);

            return
        };
        try {

            const res = await fetch('/api/auth/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            console.log(res);

            if (!res.ok) {
                toast.error("Login failed. Please try again.")
                setLoading(false);
                return
            }

            const data = await res.json()
            console.log("Login data: ", data)

            if (data.error) {
                toast.error(data.error)
                setLoading(false);

                return
            }

            localStorage.setItem('user-info', JSON.stringify(data))
            setAuthUser(data)
            console.log(data)

            toast.success("Login successful!")

        } catch (error) {
            console.log("Login error: ", error)
            setLoading(false);
            toast.error("Login failed. Please try again.");
        } finally {
            setLoading(false)
        }
    }
    return { loading, login }
}

export default useLogin