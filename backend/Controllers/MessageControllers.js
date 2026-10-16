import { MessageModel } from "../Model/MessageModel";

export const getAllMessages = async (req, res, next) => {
  try {
    if (!MessageModel) return res.status(200).json({ msg: "No messages" });

    let messages = await MessageModel.find({});
    return messages;
  } catch (error) {
    throw new Error(`Error in fetching messages ${error}`);
  }
  next();
};

export const postMessage = async (req, res, next) => {
  const { date_appoint, Contactor, email, phone, message } = await req.body;

  try {
    if (!date_appoint || !email || !phone) {
      res.status(400).json({ msg: "Invalid request" });
      return;
    }

    let NewMessage = {
      date_appoint,
      Contactor,
      email,
      phone,
      message,
    };
    MessageModel.save(NewMessage);
  } catch (error) {
    throw new Error(` Counld not send message ${error}`);
  }
};
