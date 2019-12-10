import React from 'react';
import ReactDOM from 'react-dom';


class Bomb extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    };

    componentWillUnmount() {
        clearInterval(this.interval)
    };
    
    tickOrBoom() {
        const {count} = this.state
        //console.log({count}) {count:0}, {count:1}, ...
        console.log(count) //1, 2, 3...
        if (count >= 8 ) {
            clearInterval(this.interval)
            return "BOOM!!!!"
        } else if (count % 2 === 0) {
            return 'tick'
        } else if (count % 2 !== 0) {
            return 'tock'
        }
    };
    
    render() {
        return(
            <div>
                <p>{this.tickOrBoom()}</p>
            </div>
        )
    }
}

export default Bomb;