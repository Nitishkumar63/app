import mongoose from "mongoose";
mongoose
  .connect(process.env.DB)

  .then(() => console.log("Connected"))

  .catch(() => {
    throw new Error("Failed to connect");
  });

export default mongoose;
