const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const userAction = require("./actions/user.action")
const validateRegisterInput = require("../../validation/register");


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Users Works"
  })
);

// @route   Post api/users/register
// @desc    Register users route
// @access  Public
router.post("/register", (req, res) => {
  userAction.registerUser(req.body.name, req.body.job)
    .then((response) => {
      res.send(
        response.data
      );
    })
    .catch((error) => {
      return res.status(400).json({ error: 'Something went Wrong' });
    })
});

// @route   GET api/users/list
// @desc    Get all users
// @access  Public

router.get("/list", (req, res) => {

  userAction.getUsers(req.query.page)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      return res.status(400).json({ error: 'Something went Wrong' });
    })

});

// @route   Put api/users/update
// @desc    Update user
// @access  Public

router.post("/update", (req, res) => {
  userAction.updateUser(req.body.name, req.body.job)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      return res.status(400).json({ error: 'Something went Wrong' });
    })
})

// @route   delete api/users/delete
// @desc    Delete users route
// @access  Public

router.get("/delete", (req, res) => {
  userAction.deleteUser()
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      return res.status(400).json({ error: 'Something went Wrong' });
    })
})
module.exports = router;
