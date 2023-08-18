import React from "react";

class Comment extends React.Component{
    constructor(props) {
        super(props);
    }
}

function Comment(prop) {
    return (
        <div className={"comment"}>
            <h3>{prop.title}</h3>
            <p>{prop.content}</p>
        </div>
    )
}


export default Comment;