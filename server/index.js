const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors =  require('cors');
const  postRoutes = require("./routes/Posts")
var morgan = require('morgan')

require('dotenv').config()

const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors({origin: 'http://localhost:3000'})); // instead of allowOrigin middleWare

app.use('/api/v1/posts',postRoutes);

//   app.use(cors({
//     exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
//   }));

DATABASE_URL = process.env.DATABASE_URL;

const PORT = process.env.PORT || 5000; 

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    app.listen(PORT, () => console.log(`Server running on port ${5000}`))
}).catch((err) => console.log(err) ); 


