const express = require('express');
const app = express();
app.use(express.static("public"))
let mainRouter= require('./routers/main')




app.listen(3000,()=>{
    console.log("servidor funcionando")
})

app.use('/',mainRouter)
app.use('/about',mainRouter)
