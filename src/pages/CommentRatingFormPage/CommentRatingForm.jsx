import { useEffect, useState } from "react";
import Rating from "react-rating";
import formufitService from "../../services/formufit.service";
import "./styles.css";
import emptyStar from "../../assets/img/star-empty.png";
import filledStar from "../../assets/img/star-full.png";

function CommentRatingForm({ recipeId, showRatingCommentForm, allComments }) {
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
        // when succesful

        formufitService.getRecipe(recipeId).then((comments) => {
          setComment("");
          setComments(comments.data.commentsAndRatings);
          setShowCommentForm(!comments.data.isUserRatedAndCommented);
        });
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) ❌
      });
  };

  const handleChange = (value) => {
    setRating(value);
  };

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
        {comments.length > 0 && (
          <>
            <div className="how-to-make-title">All Comments:</div>
            {comments?.map((comment) => (
              <span className="rating-comments">
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
              </span>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default CommentRatingForm;
