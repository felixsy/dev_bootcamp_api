const Bootcamp = require("../models/Bootcamp");

//@desc             Get all bootcamps
//@route            GET  /api/v1/bootcamps
//@access           Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    if (!bootcamps) {
      return res.status(400).json({ success: false });
    }
    return res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc             Get Single bootcamp
//@route            GET  /api/v1//:id
//@access           Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findOne({ _id: req.params.id });
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    return res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    // return res.status(400).json({ success: false });
    next(error);
  }
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
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ success: fale });
    }
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    return res.status(400).json({ success: fale });
  }
};

//@desc             Delete Bootcamp
//@route            DELETE  /api/v1/bootcamps/:id
//@access           Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: fale });
    }
    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    return res.status(400).json({ success: fale });
  }
};
