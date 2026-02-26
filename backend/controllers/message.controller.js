import modelMessage from "../model/message.model.js";
export const createMessage = async (req, res) => {
  try {
    const { email, message } = req.body;
    const newMessage = await modelMessage.create({ email, message });
    res.status(201).json(newMessage);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await modelMessage.find();
    res.status(201).json(messages);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await modelMessage.findByIdAndDelete(id);
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
