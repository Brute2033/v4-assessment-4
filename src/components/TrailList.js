import {Component} from 'react'
import axios from 'axios'
import AddTrail from './AddTrail'
import Trail from './Trail'

class TrailList extends Component{
    constructor(){
        super()
        this.state = {
            trailArray: []
        }
    }
    componentDidMount(){
        axios.get(('/api/trails'))
        .then((res) => {
            this.setState({trailArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    deleteTrail = (id) => {
        axios.delete(`/api/trails/${id}`)
        .then((res) => {
            this.setState({trailArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    addTrail = (trailName, difficulty, miles, time, hazards, notes) => {
        axios.post(`/api/trails`, {trailName, difficulty, miles, time, hazards, notes})
        .then ((res) => {
            this.setState({trailArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    editTrail = (id, time, hazards, notes) => {
        axios.put(`/api/trails/${id}`, {time, hazards, notes})
        .then((res) => {
            this.setState({trailArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <h2 className='header'> My DHM Trails </h2>
                <AddTrail addTrail={this.addTrail} />
                {this.state.trailArray.map((trail) => {
                    return(
                        <div>
                            {/* <h4> Personal Trail Stats </h4> */}
                                <Trail trail={trail} deleteTrail={this.deleteTrail} editTrail={this.editTrail} />
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default TrailList