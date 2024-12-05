import express from 'express';

const app  = express();
const port = 9000;

// app.use("/", (req, res) => {
//     res.json({
//         message: "Hello From Express App!"
//     });
// });

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(
      `Example app listening on port ${port} at http://localhost:${port}`
    );
  });