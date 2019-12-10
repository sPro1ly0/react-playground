import React from 'react';
import ReactDOM from 'react-dom';


class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    state = {
        chamber: null,
        spinningTheChamber: false
    };

    clickTriggerButton = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const newChamber = Math.ceil(Math.random()*8)

            this.setState({
                chamber: newChamber,
                spinningTheChamber: false
            })
        }, 2000)
        
    };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    spinningNow() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return "spinning the chamber and pulling the trigger!..."
        } else if (chamber === bulletInChamber) {
            return "BANG!!!"
        } else {
            return "you're safe!"
        }
    }

    render() {
        return(
            <div>
                <p>{this.spinningNow()}</p>
                <button onClick={this.clickTriggerButton}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;