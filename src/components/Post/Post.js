import React from 'react';
import { useHistory } from 'react-router';


const Post = (props) => {
    console.log(props);
    const{id, title, body} = props.post;
    const history = useHistory();
    const showComments = id =>{
        const url = `post/${id}`;
        history.push(url);

    }
    return (
        <div>
            <h4>Post id: {id}</h4>
            <h2>Title : {title}</h2>
            <p>Post: {body}</p>
            <button onClick={() => showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;