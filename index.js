import express from 'express';

const app  = express();
const port = 9000;

app.use("/", (req, res) => {
    res.json({
        message: "Hello From Express App!"
    });
});

// Start server
app.listen(port, () => {
    console.log(
      `Example app listening on port ${port} at http://localhost:${port}`
    );
  });