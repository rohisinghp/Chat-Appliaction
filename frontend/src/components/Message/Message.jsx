import useConversationStore from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTIme';


const Message = ({ message }) => {

  const {authUser} = useAuthContext();
   const {selectedConversations} = useConversationStore();
  //  const fromMe = message.senderId === authUser._id;
const fromMe = (message.senderId?._id || message.senderId) === authUser._id;


   const chatClassName = fromMe ? "chat-end" : "chat-start";
   const profilePic = fromMe ? authUser.profilePic : selectedConversations.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  


  return (
    <>
   <div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={profilePic}
      />
    </div>
  </div>
  {/* <div className="chat-header">

    <time className="text-xs opacity-50">{extractTime(message.createdAt)}</time>
  </div> */}
  <div className={`chat-bubble text-sm ${bubbleBgColor}`}>
    {message.message}
    </div>
  <div className="chat-footer opacity-50">{extractTime(message.createdAt)}</div>
</div>
    

    </>
  )
}

export default Message