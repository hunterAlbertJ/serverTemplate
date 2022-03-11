const express = require("express");
const route = require("./routes.js");

const PORT = 3002;

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get("/api", (req, res) => {
    console.log(req.params)
    console.log("using fetch")
    route.retrieve(res)
})
app.post("/api", (req, res) => {
    const index = req.params.index;
    route.retrieve(res)
    console.log('postin')
})
app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});
