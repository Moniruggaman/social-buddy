import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment
    return (
        <div>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
        </div>
    );
};

export default Comment;