const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors({
  origin: 'https://task-manager-assignment-frontend.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://abh1nav:Abh1nav%4009@taskmanager.9z2q7q7.mongodb.net/?retryWrites=true&w=majority'; // Ensure this URI is correct

mongoose.connect(mongoURI);

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(5000, () => console.log('Server running on port 5000'));
//   })
//   .catch(err => console.error('MongoDB connection error:', err));

// Routes
const taskRoutes = require('./Routes/tasks');
app.use('/api/tasks', taskRoutes);

// Handle preflight requests
app.options('*', cors());

app.listen(process.env.PORT || 5000, () => console.log("Server running on port 5000"));
