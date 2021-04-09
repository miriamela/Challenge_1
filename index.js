const express = require("express");
const cors = require("cors");
const app = express();
const utils = require("./utils");
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
let record = [];
const history = (req, res, next) => {
  req.timeStamp = Date.now();
  const date = new Date(req.timeStamp);
  const method = req.method;
  const url = req.url;
  record.push({
    call: method,
    date: date,
    url: url,
  });
  console.log(req.method, req.timeStamp, req.url);

  next();
};
app.use(history);

app.get("/", (req, res) => {
  res.send();
});

app.post("/numbers", (req, res) => {
  try {
    const data = req.body.data;
    const result = {
      result: utils.sumNumbers(data),
    };
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

app.get("/numbers", (req, res) => {
  try {
    const data = record.filter((each) => each.call === "POST");
    res.json(data);
  } catch (e) {
    console.log(e);
  }
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
