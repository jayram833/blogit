import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    excerpt: "",
    author: "",
    tags: "",
    date: "",
    readingTime: "",
    detailedBlog: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Blog Data:", formData);
    setFormData({
      title: "",
      imageUrl: "",
      excerpt: "",
      author: "",
      tags: "",
      date: "",
      readingTime: "",
      detailedBlog: "",
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Post a New Blog</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <label className="form-label">Blog Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
          required
        />

        <label className="form-label">Image URL:</label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="form-input"
          required
        />

        <label className="form-label">Excerpt:</label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          className="form-input"
          rows="4"
          required
        ></textarea>
        <label className="form-label">Detailed Blog:</label>
        <textarea
          name="detailedBlog"
          value={formData.detailedBlog}
          onChange={handleChange}
          className="form-input"
          rows="4"
          required
        ></textarea>

        <label className="form-label">Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="form-input"
          required
        />

        <label className="form-label">Tags (comma-separated):</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="form-input"
          required
        />

        <label className="form-label">Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="form-input"
          required
        />

        <label className="form-label">Reading Time (minutes):</label>
        <input
          type="number"
          name="readingTime"
          value={formData.readingTime}
          onChange={handleChange}
          className="form-input"
          required
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
