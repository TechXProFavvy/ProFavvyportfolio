import { MessageModel } from "../Model/MessageModel.js";

export const getAllMessages = async (req, res, next) => {
  try {
    if (!MessageModel) return res.status(200).json({ msg: "No messages" });

    let messages = await MessageModel.find({});
    return res.send(messages);
  } catch (error) {
    throw new Error(`Error in fetching messages ${error}`);
  }
  next();
};

export const postMessage = async (req, res, next) => {
  try {
    const { date_appoint, Contactor, email, phone, message } = req.body;
    if (!date_appoint || !email || !phone) {
      res.status(400).json({ msg: "Invalid request" });
      return;
    }

    let NewMessage = new MessageModel({
      date_appoint,
      Contactor,
      email,
      phone,
      message,
    });
    await NewMessage.save();

    console.log(NewMessage);
  } catch (error) {
    throw new Error(` Counld not send message ${error}`);
  }
};
