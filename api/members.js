const express = require('express')
const router = require('express').Router()
const {  db,
    Member,
    Booking,
    Facility} = ('../db')

   
router.get("/", async (req, res,next)=>{
const members=await Member.findAll()

    res.send(members)
})

module.exports = router


// router.get("/", async (req, res) => {
//     const posts = await Post.findAll({
//         include: [
//             User
//         ]
//     });

//     res.send(posts);
// })