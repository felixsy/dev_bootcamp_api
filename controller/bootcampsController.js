const Bootcamp = require("../models/Bootcamp");

//@desc             Get all bootcamps
//@route            GET  /api/v1/bootcamps
//@access           Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

//@desc             Get Single bootcamp
//@route            GET  /api/v1//:id
//@access           Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show a single bootcamp" });
};

//@desc             Create New Bootcamp
//@route            POST  /api/v1/bootcamps
//@access           Private
exports.createBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: fale });
  }
};

//@desc             Update Bootcamp
//@route            PUT  /api/v1/bootcamps/:id
//@access           Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update bootcamp" });
};

//@desc             Delete Bootcamp
//@route            DELETE  /api/v1/bootcamps/:id
//@access           Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete bootcamp" });
};
