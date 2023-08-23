const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world');
});

baseRouter.get("/add", function(req, res) {
    const first =10;
    const second =20;
    const result = first + second;
    res.status(200).json({ result });
      
    
  });

baseRouter.post('/subtract', (req, res) => {
    res.json({ "hull":1 });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});