const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')

app = express()
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(4000, () => {
    console.log('server listening on port 4000!')
})