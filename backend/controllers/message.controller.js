import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
     
   try{

      const {message} = req.body;
      const {id : receiverId} = req.params;
      const senderId = req.user._id

    //   res.send(`Message with ID ${receiverId} from sender ${senderId}: ${message} sent!`);

    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] }
    });

    // console.log(conversation);
    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId , receiverId]
        })
    } 

    const newMessage = new Message({
        senderId,
        receiverId,
        message
    })

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

//Socket io functionality for real time msges 

    // await conversation.save();
    // await newMessage.save();

//this will run in parallel 
    await Promise.all([conversation.save(), newMessage.save()]); 

    const receiverSocketId =  getReceiverSocketId(receiverId);
    if(receiverSocketId){
        io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);

}
   catch (error) {
       res.status(500).send('An error occurred while sending the message.....');
   }

}

export const getMessage = async (req, res) => {

    try{
        const senderId = req.user._id;
        const {id : receiverId} = req.params;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate('messages');

        
        if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;
        console.log('Messages:', messages);
		res.status(200).json(messages);
    }
    catch (error) {
        res.status(500).json({error: 'An error occurred while retrieving the message.'});
    }
}