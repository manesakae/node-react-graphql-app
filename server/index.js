const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema')
const connectDB = require('./config/db')

const port = process.env.PORT || 6000;

const app = express();

//connect to mongoDB
connectDB();

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true

}))
app.listen(port, () => { console.log(`Server running on port ${port}`); })

