const express = require ('express')
const port = 1800

const App = express()
app.use(express.json())


app.get('/', (req, res)=>{
    res.send('my code is ready for consumption')
})


App.listen(port, ()=>{
    console.log('listening to server')
})