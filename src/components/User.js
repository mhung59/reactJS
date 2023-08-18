import Posts from "./Posts";


const User = data => {

    const {name, age, shippingAddress, comment, post} = data;
    return (
        <div className={"user"}>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Shipping Address: {shippingAddress}</p>
            {comment}
            <Posts {...data}/>
        </div>
    );
}

export default User;