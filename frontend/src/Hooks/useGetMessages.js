import React ,{useEffect, useState} from 'react'
import useConversationStore from '../zustand/useConversation'
import { toast } from 'react-hot-toast';

const useGetMessages = () => {
 
    const [loading, setLoading] = useState(false)
    
    const {messages,setMessages, selectedConversations} = useConversationStore();


useEffect(()=>{

     const getMessages = async () =>{
        setLoading(true)
        try {
              const res = await fetch(`api/message/${selectedConversations._id}`)
              console.log('res', res);
            if (!res.ok) {
                throw new Error('Failed to fetch messages')
            }

            const data = await res.json()
            if(data.error) throw new Error(data.error);

            setMessages(data)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if(selectedConversations?._id) getMessages();
    

}, [selectedConversations?._id , setMessages])
   
return {messages, loading}
}

export default useGetMessages