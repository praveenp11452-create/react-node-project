import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:8080/bloglist");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.blogPost);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="container py-5 text-center"><p>Loading blogs...</p></div>;
  }

  if (error) {
    return <div className="container py-5 text-center"><p>Error: {error}</p></div>;
  }

  return (
    <div className="container py-5 ">
      <h2 className="text-center mb-4 fw-bold">Our Blogs</h2>

      <div className="row g-4">
        {blogs.map((blog) => (
          <div className="col-12 col-sm-6 col-md-4" key={blog._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text text-muted">
                  {blog.description}
                </p>

                <Link
                  to={`/blogdetail/${blog._id}`}
                  className="btn btn-primary btn-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
