const Cloud = require("@google-cloud/storage");
const path = require("path");
const serviceKey = path.join(__dirname, "./keys.json");

const { Storage } = Cloud;
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: "snapture-318815",
});

module.exports = storage;
