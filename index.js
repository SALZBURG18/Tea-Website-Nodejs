const express    = require("express");
const path       = require('path');

const app  = express();
const port = 9000;

// app.use("/", (req, res) => {
//     res.json({
//         message: "Hello From Express App!"
//     });
// });

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to handle requests to the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(port, () => {
    console.log(
      `Example app listening on port ${port} at http://localhost:${port}`
    );
  });