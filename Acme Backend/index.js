const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const { register } = require("./type");
const { events, participants } = require("./db");
const adminRouter = require("./routes/admin")



const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/admin", adminRouter);

app.get("/Events", async function (req, res) {
  // const event = await events.find({});

  // res.json(event);


  const Events = await events.find().sort({ date: -1 });
    // Respond with the latest events in JSON format
    res.json(Events);
});

app.get("/Results", async function (req, res) {
  const result = await winners.find({});

  res.json(result);
});

app.get("/Participants", async function (req, res) {
  const eventId = req.query.eventId;
  try {
    const participantList = await participants.find({ event: eventId });
    res.json(participantList);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching participants", error });
  }
});

app.get("/Events/latest/5", async function (req, res) {
  // try {
  //   const latestEvents = await events.find().sort({ date: -1 }).limit(5);
  //   res.json(latestEvents);
  // } catch (error) {
  //   res.status(500).json({ msg: "Error fetching latest events", error });
  // }


  try {
    // Fetch the latest 5 events, sorted by date in descending order
    const latestEvents = await events.find().sort({ date: -1 }).limit(5);
    // Respond with the latest events in JSON format
    res.json(latestEvents);
  } catch (error) {
    // Handle any errors and respond with a 500 status code and error message
    res.status(500).json({ msg: 'Error fetching latest events', error });
  }
});


// app.post("Events/:Eventsid/Register", async function (req, res) {
//   const user = req.body;
//   console.log(user);
//   const eventid=req.params.Eventsid;
//   const parsedUser = register.safeParse(user);
//   if (!parsedUser.success) {
//     res.status.json({
//       msg: "The data you have provided is not according to the schema...",
//     });
//   }

//   await participants.create({
//     event:eventid,
//     username: user.username,
//     rollnumber: user.rollnumber,
//     year: user.year,
//     section: user.section,
//   });
// });

app.post("/Events/:Eventsid/Register", async function (req, res) {
  try {
    const user = req.body;
    console.log("Received user data:", user); // Log received user data
    const eventid = req.params.Eventsid;
    const parsedUser = register.safeParse(user);

    if (!parsedUser.success) {
      return res.status(400).json({
        msg: "The data you have provided is not according to the schema...",
      });
    }

    await participants.create({
      event: eventid,
      username: user.username,
      rollnumber: user.rollnumber,
      year: user.year,
      section: user.section,
    });

    res.status(201).json({ msg: "Registration successful!" });
  } catch (error) {
    console.error("Error registering:", error);
    res.status(500).json({ msg: "Error registering. Please try again later." });
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});









