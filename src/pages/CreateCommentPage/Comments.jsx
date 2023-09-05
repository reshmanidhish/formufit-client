import { useEffect, useState } from "react";
import axios from "axios";
import formufitService from "../../services/formufit.service";

function CommentForm({ recipeId }) {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //if (validateForm()) {
            formufitService
            .createComment({recipeId, comment })
            .then((allComments) => {
              setComment("")
              setComments("")
            })
            .catch((error) => {
              // If the server sends an error response (invalid token) ❌
            });
          //}

    //     try{
    //         const commentData = new FormData();
    //         commentData.append("recipeId", recipeId);
    //         commentData.append("comment", comment);
    //         await axios.post("http://localhost:5005/comment/create", commentData)
    //         setComment("");
    //         fetchComments();
    //     } catch (error) {
    //         console.log("Error posting comment:", error);
    //     }
     };

    const fetchComments = async () => {
        formufitService
        .getComments(recipeId)
        .then((allComments) => {
            setComments(allComments.data.comments)
          })
          .catch((error) => {
            // If the server sends an error response (invalid token) ❌
          });
    };

    useEffect(() => {
        fetchComments();
    }, [recipeId]);

    return (
        <div> 
        <div className="comment-form">
            <form onSubmit={handleSubmit}>
                <textarea 
                rows="4"
                cols= "50"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="comment-list">
            <h3>Comments</h3>
            {comments?.map((comment)=> (
                <div key={comment._id}>
                    <p>{comment.comment}</p>
                    <p>Posted by: {comment.user.username}</p>
                    <p>Date: {new Date(comment.createdAt).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
        </div>
    
    )
}

export default CommentForm;