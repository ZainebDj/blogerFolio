import express from 'express';

const app = express();

app.post('/api/signup', (req, res) => {
  // Handle the signup request
  // Access request body using req.body
  // Perform necessary operations (e.g., save user to database)
  // Send response back to the client
  res.send('User registered successfully');
});

export default app;