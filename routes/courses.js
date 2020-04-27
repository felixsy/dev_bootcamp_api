const express = require("express");
const router = express.Router({ mergeParams: true });

const { getCourses } = require("../controller/coursesController");

router.route("/").get(getCourses);

module.exports = router;
