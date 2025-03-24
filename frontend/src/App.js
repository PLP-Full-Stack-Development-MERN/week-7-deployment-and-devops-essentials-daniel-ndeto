import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';

function App() {

  return (
    <div>
      <header className="bg-gray-800 text-white p-4 shadow">
        <Container className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">My Blog</Link>
          <Link to="/create" className="bg-blue-500 hover:bg-blue-700 text-red font-bold py-2 px-4 rounded">
            New Post
          </Link>
        </Container>
      </header>

      <main className="mt-6">

        <Container>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/edit/:id" element={<EditBlog />} />
          </Routes>
        </Container>
        
      </main>
    </div>
  );
}

export default App;
