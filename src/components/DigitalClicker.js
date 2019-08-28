// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    state = { timesClicked: 0 }

    updateButton = () => {
        let newState = this.state.timesClicked += 1
        this.setState({ timesClicked: newState })
    }


    render() {
        return (
            <div>
                <button onClick={this.updateButton}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker