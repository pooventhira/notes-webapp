import mongoose from "mongoose";

export const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MangoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MangoDB\n", error);
    process.exit(1); // exit with failure
  }
};
