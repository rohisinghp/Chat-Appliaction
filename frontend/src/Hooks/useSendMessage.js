import React, { useState } from 'react'
import useConversationStore from '../zustand/useConversation'
import { toast } from 'react-hot-toast';

const useSendMessage = () => {
 
    const {selectedConversations , setMessages, messages} = useConversationStore()
    const [loading, setLoading] = useState(false)

    const sendMessage = async(message)=>{
        setLoading(true);

        try {

            const res = await fetch(`api/message/send/${selectedConversations._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  message
                }),

            })
            const data = await res.json();

            if(data.error) throw new Error(data.error);

            setMessages([...messages, data]);

        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Error sending message");
        } finally {
            setLoading(false);
        }

    }
    return {
        loading,
        sendMessage
    }
}

export default useSendMessage