const userModel = require('../models/userModel')

exports.verifyEmail = (req, res) => {

}

exports.getProducts = (req, res) => {
}

exports.getUser = (req, res, next) => {
  try {
    userModel.find({}, (err, response) => {
      if (err) next(err)
      res.status(200).json({ success: true, message: "OK", data: response })
    })
  } catch (err) {
    res.json(err)
  }

}