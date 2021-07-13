const { format } = require("util");
const gc = require("./googleStorage");
const bucket = gc.bucket("snapture-modassir");
const { v1: uuid } = require("uuid");
/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

module.exports = (file) =>
  new Promise((resolve, reject) => {
    const { originalname, buffer, mimetype } = file;
    const blob = bucket.file(uuid() + originalname.replace(/ /g, "_"));
    const blobStream = blob.createWriteStream({
      resumable: false,
      contentType: mimetype,
      public: true,
    });
    blobStream
      .on("finish", () => {
        const publicUrl = format(
          `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        );
        resolve(publicUrl);
      })
      .on("error", () => {
        reject(`Unable to upload image, something went wrong`);
      })
      .end(buffer);
  });
