import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/bloglist/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogDetails();
    }
  }, [id]);

  if (loading) {
    return <div className="container py-5 text-center"><p>Loading blog details...</p></div>;
  }

  if (error) {
    return <div className="container py-5 text-center"><p>Error: {error}</p></div>;
  }

  if (!post) {
    return <div className="container py-5 text-center"><p>Blog not found</p></div>;
  }

  return (
    <div className="container my-4">
      <header
        className="rounded-3 text-white mb-4"
        style={{ backgroundImage: `url(${post.cover})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}
      >
        <div className="p-5 h-100 d-flex flex-column justify-content-end">
          <div className="container">
            <h1 className="display-6 fw-bold">{post.title}</h1>
            <div className="text-light small mb-2">
              <span>{post.author}</span> • <span>{new Date(post.date).toLocaleDateString()}</span> • <span>{post.readTime}</span>
            </div>
            <div>
              <button className="btn btn-outline-light">Share</button>
            </div>
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="lead">{post.description}</p>

              <div className="blog-content">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="mt-3">
                  {post.tags.map(tag => (
                    <Link key={tag} to={`/?tag=${tag}`} className="badge bg-primary text-decoration-none me-2">#{tag}</Link>
                  ))}
                </div>
              )}

              <div className="d-flex align-items-center mt-4 pt-3 border-top">
                <img src={`https://i.pravatar.cc/96?u=${post.author}`} alt={post.author} className="rounded" style={{width:72,height:72,objectFit:'cover'}} />
                <div className="ms-3">
                  <div className="fw-bold">{post.author}</div>
                  <div className="text-muted small">Content creator and technology enthusiast sharing insights on web development and programming.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="col-lg-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Related posts</h5>
              <ul className="list-unstyled mb-0">
                <li><Link to="/blog">Back to All Blogs</Link></li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Subscribe</h5>
              <p className="small text-muted">Get new posts by email.</p>
              <form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2">
                <input aria-label="email" placeholder="you@company.com" className="form-control" />
                <button className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BlogDetails;
 