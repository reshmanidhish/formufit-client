import { useState } from "react";
import axios from "axios";

function CommentForm({ recipeId }) {
    const [commentText, setCommentText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post ("/comment/create", {recipeId, comment: commentText});
            console.log("comment posted:", response.data);
            setCommentText("");
        } catch (error) {
            console.log("Error posting comment:", error);
        }
    };

    return (
        <div className="comment-form">
            <form onSubmit={handleSubmit}>
                <textarea 
                rows="4"
                cols= "50"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;