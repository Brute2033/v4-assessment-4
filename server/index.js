const express = require('express')

const app = express()

const PORT = 3302

const trailCtrl = require('./controllers/trailController')

app.use(express.json())

app.get('/api/trails', trailCtrl.getTrails)
app.post('/api/trails', trailCtrl.addTrail)
app.delete('/api/trails', trailCtrl.deleteTrail)
app.put('/api/trails', trailCtrl.editTrail)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))