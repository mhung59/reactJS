import React from "react";

class Event01 extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Cronus Hug Farm</h1>
                <button type={"button"} onClick={this.handleChange}>Change</button>
            </div>
        );
    }

    handleChange = () => {
        alert("test")
    }
}

export default Event01