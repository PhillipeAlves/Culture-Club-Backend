const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const axios = require("axios");
const sgMail = require("@sendgrid/mail");

let TICKET_MASTER_API = process.env.TICKET_MASTER_API;
let CULTURE_CLUB_KEY = process.env.CULTURE_CLUB_KEY;
let CULTURE_CLUB_SECRET = process.env.CULTURE_CLUB_SECRET;
let MYSQL_CULTURE_CLUB_PASSWORD = process.env.MYSQL_CULTURE_CLUB_PASSWORD;
let SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const PORT = process.env.PORT || 8888;
const saltRounds = 12;

app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use(express.json());
sgMail.setApiKey(SENDGRID_API_KEY);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: MYSQL_CULTURE_CLUB_PASSWORD,
  database: "myapp",
});

db.connect(function (err) {
  if (err) {
    console.log("Db error");
    throw err;
    return false;
  }
});

const sessionStore = new MySQLStore(
  {
    expiration: 1825 * 86400 * 1000,
    endConnectionOnClose: false,
  },
  db
);

app.use(
  session({
    key: CULTURE_CLUB_KEY,
    secret: CULTURE_CLUB_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      maxAge: 1825 * 86400 * 1000,
      httpOnly: false,
    },
  })
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.post("/sendEmail", (req, res) => {
  const { email, name, location, time } = req.body;
  const msg = {
    to: email,
    from: "culture.club.app@gmail.com",
    subject: "Catch up",
    text: "Catch up",
    html: `Hey <strong>${name}</strong>, should we meet at ${location} around ${time} for a catch up? I, see you there.`,
  };
  sgMail.send(msg);
});

app.get("/getEvents", function (req, res) {
  let page = req.query.page;
  var config = {
    method: "get",
    url: `https://app.ticketmaster.com/discovery/v2/events.json?city=melbourne&page=${page}&size=40&apikey=${TICKET_MASTER_API}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  email = email.toLowerCase();
  let cols = [email];
  db.query(
    "SELECT * FROM user WHERE email = ? LIMIT 1",
    cols,
    (err, data, fields) => {
      if (err) {
        res.json({
          success: false,
          msg: "An error accured, please try again",
        });
        return;
      }
      if (data && data.length === 1) {
        bcrypt.compare(password, data[0].password, (bcrypt, verified) => {
          if (verified) {
            req.session.user = data[0].id;
            res.json({
              success: true,
              username: data[0].username,
              userID: data[0].id,
            });
            return;
          } else {
            res.json({
              success: false,
              msg: "Invalid password",
            });
          }
        });
      } else {
        res.json({
          success: false,
          msg: "User not found, please try again",
        });
      }
    }
  );
});

app.post("/logout", (req, res) => {
  if (req.session.user) {
    req.session.destroy();
    res.json({
      success: true,
    });
    return true;
  } else {
    res.json({
      success: false,
    });
  }
});

app.post("/isLoggedIn", (req, res) => {
  if (req.session.user) {
    let cols = [req.session.user];
    db.query(
      "SELECT * FROM user WHERE id = ? LIMIT 1",
      cols,
      (err, data, fields) => {
        if (data && data.length === 1) {
          res.json({
            success: true,
            username: data[0].username,
            userID: data[0].id,
          });
          return true;
        } else {
          res.json({
            success: false,
          });
        }
      }
    );
  } else {
    res.json({
      success: false,
      msg: "not logged in",
    });
  }
});

app.post("/signup", function (req, res) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const { username, email } = req.body;
    let password = hash;
    let cols = [username, email, password];
    db.query(
      "INSERT INTO `user` (`username`, `email`, `password`) VALUES (?, ?, ?)",
      cols,
      (err, data, fields) => {
        if (err) {
          res.json({
            success: false,
            msg: "An error accured, please try again",
          });
          return;
        } else {
          req.session.user = data.insertId;
          res.json({
            success: true,
            username: username,
            userID: data.insertId,
            msg: "You have successfully created your account",
          });
          return;
        }
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`listening on PORT${PORT}`);
});
