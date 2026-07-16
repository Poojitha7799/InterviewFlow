const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const studentRoutes = require('./routes/studentRoutes');
const aiRoutes = require('./routes/aiRoutes');
const replayRoutes = require('./routes/replayRoutes');
const compilerRoutes = require('./routes/compilerRoutes');

const initInterviewSocket = require('./socket/interviewSocket');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/replay', replayRoutes);
app.use('/api/compiler', compilerRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

initInterviewSocket(io);

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`🚀 Engine Core Online on Port ${PORT}`);
});