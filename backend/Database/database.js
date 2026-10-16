import mongoose, { mongo } from "mongoose";
import { app, MONGO_URI, PORT } from "../App.js";

export const databaseConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connection to database established`);
    app.listen(PORT, () => {
      console.log(`App is running on PORT ${PORT}`);
    });
  } catch (error) {
    throw new Error(`Connection to database failed ${error}`);
    process.exit(1);
  }
};
