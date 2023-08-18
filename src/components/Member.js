import MemberInfo from "./MemberInfo";
import Avatar from "./Avatar";
import Comment from "./Comment";

function Member() {
    return (
        <div className={"member"}>
            <Avatar/>
            <MemberInfo/>
            <Comment/>
        </div>
    );
}

export default Member;