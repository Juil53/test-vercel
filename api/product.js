const express = require("express")
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: 'get data ok'
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error")
  }
})

module.exports = router