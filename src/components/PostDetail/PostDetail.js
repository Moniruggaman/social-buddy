import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/1/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [id])



    return (
        <div>
            <h2>this is post detail : {id}</h2>
            <p>User posted: {post.id}</p>
            <p>post title: {post.title}</p>
            <p>body: {post.body}</p>
            <p>Number of comments: {comments.length}</p>

            {
                comments.map(comment => <Comment comment = {comment}></Comment>)
            }

        </div>
    );
};

export default PostDetail;
