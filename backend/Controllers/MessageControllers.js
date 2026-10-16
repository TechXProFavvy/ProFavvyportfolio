import { MessageModel } from "../Model/MessageModel";

export const getAllMessages = async (req, res, next) => {
  let messages = await MessageModel.find({});
  if (!messages) return "No messages";
  res.status(200).send(messages);

  next();
};

export const postMessage = async (req, res, next) => {
  const { date_appoint, Contactor, email, phone, message } = await req.body;
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
};
