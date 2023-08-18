import React, {Component} from "react";

export default class Comment extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const {title, content} = this.props;

        return (
            <div className={"comment"}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    }
}