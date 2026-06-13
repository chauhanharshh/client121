import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  // Using a flexible Schema type (Mixed) because the CMS content is a large nested object 
  // that corresponds to initialSiteContent. We just need to store and retrieve it as a single JSON blob.
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
}, { timestamps: true });

// We only ever need one document in this collection
export const Content = mongoose.model("Content", ContentSchema);
