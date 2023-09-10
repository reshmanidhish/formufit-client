import { useEffect, useState } from "react";
import Rating from "react-rating";
import formufitService from "../../services/formufit.service";
import "../CreateCommentPage/comment.css";
import emptyStar from "../../assets/img/star-empty.png";
import filledStar from "../../assets/img/star-full.png";

function CommentForm({ recipeId, showRatingCommentForm, allComments }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(allComments);
  const [rating, setRating] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(showRatingCommentForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if (validateForm()) {
    formufitService
      .createCommentAndRating({ recipeId, comment, rating })
      .then((newComment) => {
        formufitService.getRecipe(recipeId).then((comments) => {
          setComment("");
          setComments(comments.data.commentsAndRatings);
          setShowCommentForm(!comments.data.isUserRatedAndCommented);
        });
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

  const handleChange = (value) => {
    setRating(value);
  };

  //   const fetchComments = async () => {
  //     formufitService
  //       .getComments(recipeId)
  //       .then((allComments) => {
  //         setComments(allComments.data.commentsAndRatings);
  //       })
  //       .catch((error) => {
  //         // If the server sends an error response (invalid token) ❌
  //       });
  //   };

  useEffect(() => {
    // fetchComments();
  }, [recipeId]);

  return (
    <div>
      {showCommentForm && (
        <div className="comment-form">
          <form onSubmit={handleSubmit}>
            <Rating
              className="mb-3"
              emptySymbol={<img src={emptyStar} className="star" />}
              fullSymbol={<img src={filledStar} className="star" />}
              onChange={handleChange}
              initialRating={rating}
            />
            <textarea
              rows="4"
              cols="50"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <div className="comment-list">
        {comments?.map((comment) => (
          <>
            <div className="how-to-make-title">All Comments:</div>
            <div key={comment._id}>
              <Rating
                className="mb-3"
                initialRating={comment.rating}
                readonly
                value={comment.rating}
                emptySymbol={
                  <img src={emptyStar} width="18" className="star" />
                }
                fullSymbol={
                  <img src={filledStar} width="18" className="star" />
                }
              />
              <p className="Post">{comment.user.username}</p>
              <p className="date">
                {new Date(comment.createdAt).toLocaleDateString()}
              </p>
              <p className="comment-box">{comment.comment}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default CommentForm;
