const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");

//@desc             Get all bootcamps
//@route            GET  /api/v1/bootcamps
//@access           Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    if (!bootcamps) {
      next(err);
    }
    return res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    next(err);
  }
};

//@desc             Get Single bootcamp
//@route            GET  /api/v1//:id
//@access           Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findOne({ _id: req.params.id });
    if (!bootcamp) {
      next(err);
    }
    return res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    // return res.status(400).json({ success: false });
    next(err);
  }
};

//@desc             Create New Bootcamp
//@route            POST  /api/v1/bootcamps
//@access           Private
exports.createBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    // return res
    //   .status(400)
    //   .json({ success: false, msg: "The resource already published" });
    next(err);
  }
};

//@desc             Update Bootcamp
//@route            PUT  /api/v1/bootcamps/:id
//@access           Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    let bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }

    bootcamp = await Bootcamp.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
  }
};

//@desc             Delete Bootcamp
//@route            DELETE  /api/v1/bootcamps/:id
//@access           Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      next(err);
    }
    return res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
