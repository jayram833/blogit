import { Link } from "react-router-dom";
import "./PostCard.css";

function PostCard({ post }) {
  const { title, imageUrl, author, date, readingTime, detailedBlog, tags } =
    post;
  return (
    <div className="blog-post">
      <div className="blog-post-header">
        <h1 className="blog-title">{title}</h1>
        <img src={imageUrl} alt={title} className="blog-image" />
      </div>
      <div className="blog-meta">
        <p className="blog-author">By {author}</p>
        <p className="blog-date">{new Date(date).toLocaleDateString()}</p>
        <p className="reading-time">{readingTime} min read</p>
      </div>
      <div className="blog-tags">
        {tags.map((tag, index) => (
          <span key={index} className="blog-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="blog-content">
        <p>{detailedBlog}</p>
      </div>
    </div>
  );
}

export default PostCard;
