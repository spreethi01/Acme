const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");

// const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");
const { users, events, participants, winners } = require("../db");

router.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = await users.find({
    username,
    password,
  });

  // console.log(user);

  if (user.length > 0) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(404).json({
      msg: "Invalid user!!",
    });
  }
});

router.post("/addEvents", adminMiddleware, async function (req, res) {
  const title = req.body.title;
  const sub_org = req.body.sub_org;
  const description = req.body.description;
  const date = req.body.date;

  await events.create({
    title,
    sub_org,
    description,
    date,
    completed: false,
  });

  res.json({
    msg: "Event added!!",
  });
});

// Delete an event
router.delete("/events/:id", adminMiddleware, async (req, res) => {
  try {
    const eventId = req.params.id;
    await events.findByIdAndDelete(eventId);
    res.json({ msg: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting event", error });
  }
});

// Update an event
router.put("/events/:id", adminMiddleware, async (req, res) => {
  try {
    const eventId = req.params.id;
    const updateData = req.body;
    await events.findByIdAndUpdate(eventId, updateData, { new: true });
    res.json({ msg: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error updating event", error });
  }
});

// Mark an event as completed
router.put("/events/:id/complete", adminMiddleware, async (req, res) => {
  try {
    const eventId = req.params.id;
    await events.findByIdAndUpdate(eventId, { completed: true }, { new: true });
    res.json({ msg: "Event marked as completed" });
  } catch (error) {
    res.status(500).json({ msg: "Error marking event as completed", error });
  }
});

router.post("/addWinners", adminMiddleware, async function (req, res) {
  const first = req.body.first;
  const second = req.body.second;
  const third = req.body.third;
  const event = req.body.event;

  let validF = True;

  for (let i = 0; i < first.length(); i++) {
    let test = await participants.find({
      _id: first[i],
    });
    if (!test) {
      validF = False;
    }
  }

  let validS = True;

  for (let i = 0; i < second.length(); i++) {
    let test = await participants.find({
      _id: second[i],
    });
    if (!test) {
      validS = False;
    }
  }

  let validT = True;

  for (let i = 0; i < third.length(); i++) {
    let test = await participants.find({
      _id: third[i],
    });
    if (!test) {
      validT = False;
    }
  }

  // const validF = await participants.find({
  //   _id: first,
  // });
  // const validS = await participants.find({
  //   _id: second,
  // });
  // const validT = await participants.find({
  //   _id: third,
  // });
  const validE = await events.find({
    _id: event,
  });

  if (!validF || !validS || !validT || !validE) {
    res.status(404).json({
      msg: "The input provided is invalid!!!",
    });
  }

  await winners.create({
    first,
    second,
    third,
    event,
  });

  res.json({
    msg: "Winner added!!",
  });
});

module.exports = router;
