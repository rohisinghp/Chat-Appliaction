import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext.'
import toast from 'react-hot-toast'

const useLogout = () => {
 
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    
    const logout = async () => {
        setLoading(true)
        try { 
            const response = await fetch('/api/auth/logout', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
               
                }
            })
            console.log(response)
            // Check if the response is ok (status code 200-299);
            if (!response.ok) {
                throw new Error('Logout failed')
            }
            const data = await response.json()
            localStorage.removeItem('user-info')
            setAuthUser(null)
            toast.success('Logout successful')
            console.log(data)

        } catch (error) {
            console.error('Error during logout:', error)
            toast.error('Logout failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return { loading, logout }
}

export default useLogout