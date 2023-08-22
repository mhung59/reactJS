import React from "react";

class Event02 extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = (text) => {
            alert(text);
        }
    }

    // handleChange = (text) => {
    //     alert(text)
    // }

    render() {

        return(
            <>
                <h1>
                    Form
                </h1>
                <button type={"button"} onClick={() => {
                    this.handleChange("Changed")
                }}> Change</button>
            </>
        );
    }
}

export default Event02;