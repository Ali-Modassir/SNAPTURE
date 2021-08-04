const User = require("../models/User");
const uploadImage = require("../googleStorage/fileUpload");

module.exports.updateProfile = async (req, res) => {
  try {
    const { userId, firstName, lastName, institute, division } = req.body;
    const myFile = req.file;
    const profilePic = await uploadImage(myFile);
    var name = null;
    if (firstName && lastName) name = firstName + " " + lastName;

    const user = await User.findByIdAndUpdate(userId, {
      $set: {
        "local.name": name || local.name,
        "local.profilePic": profilePic || local.profilePic,
        "local.institute": institute || local.institute,
        "local.division": division || local.division,
      },
    });
    if (user) return res.json({ message: "Profile Updated", ok: true });
    else return res.json({ message: "User Not found", ok: false });
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
