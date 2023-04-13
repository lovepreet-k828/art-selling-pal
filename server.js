const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
require('dotenv').config({path: './config.env'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, 
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    }
).then(()=>{console.log('connection succesfull')
}).catch((err)=>{console.log('error connection: ',err)})

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const artRouter = require('./routes/art.js');
const userRouter = require('./routes/user.js');
const paymentRouter = require('./routes/payment.js');

app.use('/art', artRouter);
app.use('/user', userRouter);
app.use('/payment', paymentRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});