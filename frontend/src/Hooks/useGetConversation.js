import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
// import { toast } from 'react-toastify';

const useGetConversation = () => {
 
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

  useEffect(() => {

    const getConversation = async () => {

        try{
            setLoading(true)
            const res = await fetch('/api/users');

            if(!res.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await res.json();

            setConversations(data);

        }
        catch (error) {
            
            toast.error("Error fetching conversations");
            console.error("Error fetching conversations", error);
    }
        finally {
            setLoading(false);
        }
    }

    getConversation();
  },[])

    return { conversations, loading }

}

export default useGetConversation