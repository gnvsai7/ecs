  
const express = require('express')
const app = express()
app.get('/app', (req, res) => {
    res.send('NodeJs App Running on Amazon EKS Fargate!\n')
})
app.listen(80, () => {
    console.log("server connected")
})
  