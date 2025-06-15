import { model, Schema } from "mongoose";


// note schema
const noteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, default: "Not Provided" },
    category: {
      type: String,
      enum: ["personal", "work", "study", "other"],
      default: "personal",
      pinned: { type: Boolean, default: false },
    },
    tags: {
      label: { type: String, required: true },
      color: { type: String, default: "gray" },
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

// note instance
const Note = model("Note", noteSchema);


export default Note;