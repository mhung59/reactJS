function Posts({post, name}) {

    const postJsx = post.map((post, index) => {
       return (
           <div key={index}>
               <h3>{post.title}</h3>
               <p>{post.content}</p>
               <p>By: {name}</p>
           </div>
       );
    });

    return (
        <>
            <h3>Post List</h3>
            {postJsx}
        </>
    );
}

export default Posts;