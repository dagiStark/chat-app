export const sendMessage = (req, res) =>{
    try {
        const {message} = req.body
        const {id: receiverId} = req.params
        const senderId = req.user._id
        
    } catch (error) {
        res.status(500).json({Error: "can't send the message!"})
    }
}

