import express from 'express';

const app = express();
const port = 3000;

// Define API endpoints

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
