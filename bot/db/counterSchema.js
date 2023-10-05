import { config } from "dotenv";
config();

import mongoose, { Schema, model } from "mongoose";

mongoose.connect(process.env.MONGO_DB);

const counterSchema = new Schema({
  count: {
    type: Number,
    default: 0,
  },
});

export const Counter = new model("COUNT", counterSchema);
