const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userRouter = require('./routers/userManager');
const utilRouter = require('./routers/utils');
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/util', utilRouter);

app.get('/home', (req, res) => {
    console.log('Received Request');
    res.send('Welcome Home Sweet Home');
})

app.listen(port, () => { console.log('server started ' + port) });