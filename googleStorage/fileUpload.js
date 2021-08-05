const { format } = require("util");
const gc = require("./googleStorage");
const bucket = gc.bucket("snapture-modassir");
const stream = require("stream");

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
    const bufferStream = new stream.PassThrough();
    const { originalname, buffer, mimetype, size } = file;
    const blob = bucket.file(originalname.replace(/ /g, "_"));
    bufferStream
      .pipe(
        blob.createWriteStream({
          resumable: false,
          contentType: mimetype,
          predefinedAcl: "publicRead",
          metadata: { bytes: size },
        })
      )
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
