import React, {Component} from "react";

export default class Customer extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        // setup default value for state
        this.state = {
            info: props.info
        }
    }

    changeInfo = () => {
        this.setState({
            info: {
                name: 'Cronus',
                email: 'Cronus@mail.com'
            }
        })
    }

    resetInfo = () => {
        this.setState({
            info: this.props.info
        })
    }

    render() {
        const {name, email} = this.state.info;

        return (
            <div>
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <button type={"button"} onClick={this.changeInfo}>Change Info</button>
                <button type={"button"} onClick={this.resetInfo}>Reset Info</button>
            </div>
        )
    }
}