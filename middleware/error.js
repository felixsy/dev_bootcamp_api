const errorHandler = (err, req, res, next) => {
  // Console log for the developer
  console.log(err.stack);

  res.status(500).json({
    success: false,
    error: err.message,
  });
};

module.exports = errorHandler;
