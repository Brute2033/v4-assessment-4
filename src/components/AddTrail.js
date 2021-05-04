import {Component} from 'react'

class AddTrail extends Component{
    constructor(){
        super()
        this.state = {
            add: false,
            trailName: '',
            difficulty: '',
            miles: 0,
            time: 0,
            hazards: '',
            notes: ''
        }
    }
    handleTrailName = (value) => {
        this.setState({trailName: value})
    }
    handleDifficulty = (value) => {
        this.setState({difficulty: value})
    }
    handleMiles = (value) => {
        this.setState({miles: value})
    }
    handleTime = (value) => {
        this.setState({time: value})
    }
    handleHazards = (value) => {
        this.setState({hazards: value})
    }
    handleNotes = (value) => {
        this.setState({notes: value})
    }
    handleAdd = () => {
        this.props.addTrail(
            this.state.trailName,
            this.state.difficulty,
            this.state.miles,
            this.state.time,
            this.state.hazards,
            this.state.notes
        )
        this.toggleAdd()
        this.setState({
            trailName: '',
            difficulty: '',
            miles: 0,
            time: 0,
            hazards: '',
            notes: ''
        })
    }
    toggleAdd = () => {
        this.setState({add: !this.state.add})
    }
    render(){
        return this.state.add ? (
            <div>
              <h2> Add Trail </h2>
              <input value={this.state.trailName} onChange={(e) => this.handleTrailName(e.target.value)} placeholder='Enter Trail Name' />
              <input value={this.state.difficulty} onChange={(e) => this.handleDifficulty(e.target.value)} placeholder='Enter Difficulty' />
              <input value={this.state.miles} onChange={(e) => this.handleMiles(e.target.value)} placeholder='Enter Length In Miles' />
              <input value={this.state.time} onChange={(e) => this.handleTime(e.target.value)} placeholder='Enter Time In Minutes' />
              <input value={this.state.hazards} onChange={(e) => this.handleHazards(e.target.value)} placeholder='Enter Hazards' />
              <input value={this.state.notes} onChange={(e) => this.handleNotes(e.target.value)} placeholder='Enter Notes' />
              <button onClick={this.handleAdd} className='add-trail'> Add Trail </button>
            </div>
        ) : (
            <div className='move-it'>
                <h2> My Trails </h2>
                <button onClick={this.toggleAdd} className='add'> + </button>
            </div>
        )
    }
}


export default AddTrail