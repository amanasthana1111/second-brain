import mongoose from "mongoose";
const Types = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const contentTypes = ["document", "tweet", "youtube", "link"]; 

const contentSchema = new mongoose.Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: String, }],
  userId: { type: Types.ObjectId, ref: "user", required: true },
});

const linkSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const UserModel = mongoose.model("user",userSchema)
const ContentModel = mongoose.model("content",contentSchema)
const linkModel = mongoose.model("link",linkSchema)
export {
    UserModel,
    ContentModel,
    linkModel
}