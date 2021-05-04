import {Component} from 'react'

class Trail extends Component{
    constructor(){
        super()
        this.state = {
            edit: false,
            display: false,
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
    handleDisplay = () => {
        this.setState({display: !this.state.display})
    }
    render(){
        return this.state.edit ? (
            <div className='trail'>
                <input value={this.state.time} onChange={(e) => this.handleTime(e.target.value)} placeholder='Enter New Fastest Time' />
                <input value={this.state.hazards} onChange={(e) => this.handleHazards(e.target.value)} placeholder='Enter Hazards' />
                <input value={this.state.notes} onChange={(e) => this.handleNotes(e.target.value)} placeholder='Enter Notes' />
                <button onClick={this.handleSave}> Save </button>
            </div>
        ) : (
            <div className='trail'>
                <div className='namie'>
                    <p> Trail Name: {this.props.trail.trailName} </p>
                    <button onClick={this.handleDisplay} className='all-of-it'> More </button>
                <button onClick={() => this.props.deleteTrail(this.props.trail.id)} className='begone'> Delete Trail </button>
                </div>
               { this.state.display && <div className='stats'>
                    <h4> Personal Trail Stats </h4>
                    <p> Trail Name: {this.props.trail.trailName} </p>
                    <p> Difficulty: {this.props.trail.difficulty} </p>
                    <p> Miles: {this.props.trail.miles} </p>
                    <p> Time: {this.props.trail.time} </p>
                    <p> Hazards: {this.props.trail.hazards} </p>
                    <p className='notes'> Notes: {this.props.trail.notes} </p>
                    <button onClick={this.toggleEdit} className='plastic-surgery'> Edit </button>
                </div>}
                
            </div>
        )
    }
}


export default Trail