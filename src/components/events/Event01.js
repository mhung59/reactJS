import React from "react";

class Event01 extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Cronus Hug Farm Form</h1>
                <form onSubmit={this.handleChange}>
                    <input type={"text"} name={"userName"} placeholder={"Username..."}/>
                    <button type={"submit"}>Submit</button>
                </form>
            </div>
        );
    }

    handleChange = (e) => {
        e.preventDefault();
        alert("Submit");
    }
}

export default Event01