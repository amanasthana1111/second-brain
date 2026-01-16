import mongoose from "mongoose";
const Types = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const tagSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
});
const contentTypes = ["image", "video", "article", "audio"]; // Extend as needed

const contentSchema = new mongoose.Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: "Tag" }],
  userId: { type: Types.ObjectId, ref: "User", required: true },
});

const linkSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const UserModel = mongoose.model("user",userSchema)
const TagModel = mongoose.model("tag",tagSchema)
const ConnentModel = mongoose.model("content",contentSchema)
const linkModel = mongoose.model("link",linkSchema)
export {
    UserModel,
    TagModel,
    ConnentModel,
    linkModel
}