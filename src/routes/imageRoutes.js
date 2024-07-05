import express from "express";
import uploadImage from "../middleware/uploadImageToS3Middleware.js";
import { deleteLocalFiles, filterImageFromURL } from "../util/util.js";

export const router = express.Router();

router.post("/", uploadImage.single("file"), async (req, res) => {
  if (req.file) {
    res.status(201).json({ url: req.file.location });
  } else {
    console.error("S3 upload failed", req);
    res.status(500).send("Image upload failed");
  }
});

router.get("/filteredimage", async (req, res) => {
  const imageUrl = req.query.image_url;

  // Validate the image_url query parameter
  if (!imageUrl) {
    return res.status(400).send({ message: "Image URL is required" });
  }

  try {
    // Call filterImageFromURL(imageUrl) to filter the image
    const filteredPath = await filterImageFromURL(imageUrl);

    // Send the resulting file in the response
    res.sendFile(filteredPath, (err) => {
      if (err) {
        return res.status(500).send({ message: "Error sending the file" });
      }

      // Delete any files on the server on finish of the response
      deleteLocalFiles([filteredPath]);
    });
  } catch (error) {
    console.error("Error processing image:", error);
    return res.status(500).send({ message: "Error processing image" });
  }
});
