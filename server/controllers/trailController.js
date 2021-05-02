let trails = [
    {
        id: 0,
        trailName: '',
        difficulty: '',
        miles: 0,
        time: 0,
        hazards: '',
        notes: ''
    }
]
let id = 1
module.exports = {
    getTrails: (req, res) => {
        res.status(200).send(trails)
    },
    addTrail: (req, res) => {
        const {trailName, difficulty, miles, time, hazards, notes} = req.body
        const trail = {
            id: id,
            trailName: trailName,
            difficulty: difficulty,
            miles: miles,
            time: time,
            hazards: hazards,
            notes: notes
        }
        id++
        trails.push(trail)
        res.status(200).send(trails)
    },
    deleteTrail: (req, res) => {
        const {id} = req.params
        const index = trails.findIndex((e) =>{
            return e.id === +id
        })
        if(index === -1){
            return res.status(500).send("trail doesn't exist")
        }
        trails.splice(index, 1)
        res.status(200).send(trails)
    },
    editTrail: (req, res) => {
        const {id} = req.params
        const {time, hazards, notes} = req.body
        const index = trails.findIndex((e) => {
            return e.id === +id
        })
        trails[index].time = time
        trails[index].hazards = hazards
        trails[index].notes = notes
        res.status(200).send(trails)
    }
}