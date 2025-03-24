import React, { useEffect, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

function EditBlog() {

  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/api/blogs/${id}`)

      .then(response => {
        const blog = response.data;
        setTitle(blog.title);
        setContent(blog.content);
        setAuthor(blog.author);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blog:", error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`/api/blogs/${id}`, { title, content, author })

      .then(() => {
        navigate(`/post/${id}`);
      })
      
      .catch(error => {
        console.error("Error updating blog:", error);
      });
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter blog content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Blog
      </Button>
    </Form>
  );
}

export default EditBlog;
