const express = require("express");

const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamps,
  updateBootcamp,
  deleteBootcamp,
} = require("../controller/bootcampsController");

// include other resource router
const courseRouter = require("./courses");

router.use("/:bootcampsId/courses", courseRouter);

router.route("/").get(getBootcamps).post(createBootcamps);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
