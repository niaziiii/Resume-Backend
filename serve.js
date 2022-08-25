const dotEnv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');


// configuring the .env file to serve file
dotEnv.config();
const DB = process.env.DATABASE


// database Integrated to mongoDB
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Mongodb is integrated with express()'))
    .catch(err => {
        console.log('Mongodb isnt\' integrated with express()');
    })


console.log();


// adding port and listen to server
const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`app just listing at port ${port}`) });