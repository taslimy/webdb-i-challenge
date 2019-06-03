const express = require("express");
const router = express.Router();
const Accounts = require("../../data/accounts-model");

// @route GET api/accounts
// @desc get route
// @access Public

router.get("/", async (req, res) => {
  try {
    const accounts = await Accounts.find();
    res.status(200).json(accounts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot find projects"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const accounts = await Accounts.add(req.body);
    res.status(200).json(accounts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "error adding accounts"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const accounts = await Accounts.findById(req.params.id);
    res.status(200).json(accounts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot find id"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const accounts = await Accounts.update(req.params.id, req.body);
    res.status(200).json(accounts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot update the accounts"
    });
  }
});

router.delete("/:id", async (req,res) => {
  try {
    const accounts = await Accounts.remove(req.params.id)
    res.status(200).json(accounts)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: "cannot delete accounts."
    })
  }
});

module.exports = router;
