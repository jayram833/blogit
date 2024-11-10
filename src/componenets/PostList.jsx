import { useState } from "react";
import blogData from "../data/data";

function PostList() {
  const [postData, setPostdata] = useState(blogData);
  return (
    <div className="blog-list">
      {postData.map((item, id) => {
        return <ListItem key={id} item={item} />;
      })}
    </div>
  );
}

function ListItem({ item }) {
  const {
    title,
    imageUrl,
    excerpt,
    author,
    date,
    readingTime,
    tags,
    url,
    detailedBlog,
  } = item;

  return (
    <div className="list-item">
      <h2 className="title">{title}</h2>
      <img className="thumbnail" src={imageUrl} alt={title} />
      <p className="excerpt">{excerpt}</p>

      <div className="meta">
        <span className="author">
          By <strong>{author}</strong>
        </span>{" "}
        |<time className="date">{date}</time> |
        <span className="reading-time">{readingTime}</span>
      </div>

      <div className="tags">
        {tags.map((tg, i) => (
          <span className="tag" key={i}>
            {tg}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PostList;
