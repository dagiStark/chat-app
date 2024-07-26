import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to db.....");
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};


export default connectToDb;
