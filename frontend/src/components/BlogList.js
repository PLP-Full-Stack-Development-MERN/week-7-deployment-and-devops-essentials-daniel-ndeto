import React, { useEffect, useState } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../services/api';

function BlogList() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    api.get('/api/blogs')
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <ListGroup>
      {blogs.map(blog => (
        <ListGroup.Item key={blog._id}>
          <Link to={`/post/${blog._id}`}>{blog.title}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default BlogList;
