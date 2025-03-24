import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, Card, Spinner } from 'react-bootstrap';
import api from '../services/api';

function BlogPost() {

  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/api/blogs/${id}`)

      .then(response => {
        setBlog(response.data);
        setLoading(false);
      })

      .catch(error => {
        console.error("Error fetching blog:", error);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    api.delete(`/api/blogs/${id}`)
      .then(() => {
        navigate('/');
      })
      
      .catch(error => {
        console.error("Error deleting blog:", error);
      });
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.content}</Card.Text>
        <Card.Text><small className="text-muted">By {blog.author}</small></Card.Text>
        <Button variant="primary" as={Link} to={`/edit/${id}`} className="me-2">Edit</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogPost;
