const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());
app.use(bodyParser.json()); 

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post("/add", function(req, res) {
    const { first, second } = req.body;
    const result = first +second;
    res.status(200).json({ result });
  });

baseRouter.post('/subtract', (req, res) => {
  const { first, second } = req.body;
  const result = first -second;
  res.status(200).json({ result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});