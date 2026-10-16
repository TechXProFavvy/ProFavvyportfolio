import mongoose from "mongoose";

const Schema = mongoose.Schema(
  {
    date_appoint: String,
    Contactor: String,
    email: String,
    phone: String,
    message: String,
  },
  { TimeStamps: true },
);

export const MessageModel = new mongoose.model("Messages", Schema);
