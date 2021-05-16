// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
    
    constructor(){
        super()
        this.state = {
            mood: "happy"
        }
    }

    handleClick() {
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({ mood: newMood });
    }
    
    render() {
        const thisComponent = this
        // debugger
        return(
            <div onClick={() => thisComponent.handleClick()}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent