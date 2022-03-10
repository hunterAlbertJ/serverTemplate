const express = require("express");
const route = require("./routes.js");

const PORT = 3002;

const app = express();
app.use(express.static('public'));

app.get("/api/:index?", (req, res) => {
    const index = req.params.index;
    console.log(index)
    route.retrieve(res, index)
})
app.get("/:index?", (req, res) => {
    const index = req.params.index;
    console.log(index)
    route.retrieve(res, index)
})
app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});
