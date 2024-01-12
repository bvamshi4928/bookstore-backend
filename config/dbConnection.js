import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDb;
