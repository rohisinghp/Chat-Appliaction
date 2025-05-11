import {create} from 'zustand';


const useConversationStore = create((set) =>({
    selectedConversations: null,
    setSelectedConversations: (selectedConversations) => set({selectedConversations}),
    messages: [],
    setMessages: (messages) => set({messages}),
}))

export default useConversationStore; 