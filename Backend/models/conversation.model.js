import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    // we keep participants to get to know the messages to get them ki inn 2 users me jo messages hue h vo sare aa jao
  participants: [ //array as it can be group also
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});
export const Conversation = mongoose.model("Conversation",conversationSchema);
