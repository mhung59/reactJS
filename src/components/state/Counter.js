import React, {Component} from 'react';

class Counter extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.count
        }
    }

    add = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    minus = () => {
        this.setState(prevState => ({
            count: prevState.count > 0 ? prevState.count - 1 : prevState.count
        }));
    }


    render() {
        return (
            <div style={{
                margin: '3%'
            }}>
                <h1>Count: {this.state.count}</h1>
                <button type={"button"} onClick={this.minus}>-</button>
                <button type={"button"} onClick={this.add}>+</button>
            </div>
        );
    }
}

export default Counter;