
const express = require("express");
const router = express.Router();

const memberRouter = require('./members');
router.use('/members', memberRouter);
// const postRouter = require('./post');
// router.use('/post', postRouter);

module.exports = router;