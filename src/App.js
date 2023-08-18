import './App.css';
import User from "./components/User";
import Comment from "./components/Comment";
import Event01 from "./components/events/Event01";

function App() {

    const users = [
        {
            name: 'Hung Pham',
            age: 24,
            shippingAddress: 'HCM',
            comment: {
                title: "Comment user 01",
                content: "Content comment 01"
            },
            post: [
                {
                    title: 'Post 01',
                    content: 'content 01'
                },
                {
                    title: 'Post 02',
                    content: 'content 02'
                },
                {
                    title: 'Post 02',
                    content: 'content 03'
                },
            ]
        },
        {
            name: 'Hai Vu',
            age: 24,
            shippingAddress: 'DL',
            comment: {
                title: "Comment user 02",
                content: "Content comment 02"
            },
            post: [
                {
                    title: 'Post 01',
                    content: 'content 01'
                },
                {
                    title: 'Post 02',
                    content: 'content 02'
                },
                {
                    title: 'Post 02',
                    content: 'content 03'
                }
            ]
        },
        {
            name: 'Trien Le',
            age: 24,
            shippingAddress: 'HCM',
            comment: {
                title: "Comment user 03",
                content: "Content comment 03"
            },
            post: [
                {
                    title: 'Post 01',
                    content: 'content 01'
                },
                {
                    title: 'Post 02',
                    content: 'content 02'
                },
                {
                    title: 'Post 02',
                    content: 'content 03'
                }
            ]
        }
    ];

    const userLists = users.map((item, index) => {
        return (
            <User
                key={index}
                name={item.name}
                age={item.age}
                shippingAddress={item.shippingAddress}
                comment={
                    <Comment
                        title={item.comment.title}
                        content={item.comment.content}
                    />
                }
                post={item.post}
            />
        );
    });


    return (
        <>
            {/*{userLists}*/}
            <Event01/>
        </>
    );
}

export default App;
