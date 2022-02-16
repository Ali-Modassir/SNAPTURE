const User = require("../models/User");
const uploadImage = require("../fileUpload/fileUpload");
const jwt = require("jsonwebtoken");

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  });
};

module.exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const myFile = req.file;
    var profilePic = null;
    if (myFile) profilePic = await uploadImage(myFile);

    const data = {};
    Object.keys(req.body).forEach((key) => {
      if (key != "userId") data[`local.${key}`] = req.body[key];
    });

    if (!!profilePic && !!profilePic.url)
      data[`local.profilePic`] = profilePic.url;

    const user = await User.findByIdAndUpdate(userId, { $set: data });
    if (user) {
      const token = createToken(user._id);
      return res.json({
        message: "Profile Updated",
        ok: true,
        token,
      });
    } else return res.json({ message: "User Not found", ok: false });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Unable to update file", ok: false });
  }
};

module.exports.getProfileDetails = async (req, res) => {
  const { id } = req.params;
  if (id == null)
    return res.json({
      message: "Unable to fetch profile Details, Missing profileId",
      ok: false,
    });
  try {
    const user = await User.findById(id);
    if (!user) return res.json({ message: "User Not found", ok: false });
    else return res.json({ ok: true, ...user });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Something went wrong", ok: false });
  }
};
