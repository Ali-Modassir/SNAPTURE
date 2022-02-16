const cloudinary = require("./cloudinary");

module.exports = async (file) => {
  if (!file) return { message: "Image not found", ok: false };
  const path = file.path;
  try {
    const image = await cloudinary.uploader.upload(path, {
      folder: "snapture_profilePics",
      use_filename: true,
    });
    return { url: image.url, ok: true };
  } catch (err) {
    console.log("Unable to upload file");
    console.log(err);
    return { message: "Unable to upload file", ok: false };
  }
};
