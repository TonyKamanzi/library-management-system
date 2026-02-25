import mongoose, { model } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ModelMessage = mongoose.model("Message", messageSchema);

export default ModelMessage;