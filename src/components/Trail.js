import {Component} from 'react'

class Trail extends Component{
    constructor(){
        super()
        this.state = {
            edit: false,
            time: 0,
            hazards: '',
            notes: ''
        }
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
    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }
    handleSave = () => {
        this.props.editTrail(this.props.trail.id, this.state.time, this.state.hazards, this.state.notes)
        this.toggleEdit()
        this.setState({time: 0, hazards: '', notes: ''})
    }
    render(){
        return this.state.edit ? (
            <div className='trail'>
                <input value={this.state.time} onChange={(e) => this.handleTime(e.target.value)} />
                <input value={this.state.hazards} onChange={(e) => this.handleHazards(e.target.value)} />
                <input value={this.state.notes} onChange={(e) => this.handleNotes(e.target.value)} />
                <button onClick={this.handleSave}> Save </button>
            </div>
        ) : (
            <div className='trail'>
                <p> Trail Name: {this.props.trail.trailName} </p>
                <p> Difficulty: {this.props.trail.difficulty} </p>
                <p> Miles: {this.props.trail.miles} </p>
                <p> Time: {this.props.trail.time} </p>
                <p> Hazards: {this.props.trail.hazards} </p>
                <p> Notes: {this.props.trail.notes} </p>
                <button onClick={() => this.props.deleteTrail(this.props.trail.id)}> Delete Trail </button>
                <button onClick={this.toggleEdit}> Edit </button>
            </div>
        )
    }
}


export default Trail