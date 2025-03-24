const Blog = require('../models/Blog');

// Get all blogs
exports.getAllBlogs = async (req, res, next) => { 
  try {

    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } 
  catch (error) {
    next(error);
  }
};

// Get a single blog by ID
exports.getBlogById = async (req, res, next) => {
  try {

    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } 
  catch (error) {
    next(error);
  }
};

// Create a new blog
exports.createBlog = async (req, res, next) => {
  try {

    const blog = new Blog(req.body);
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } 
  catch (error) {
    next(error);
  }
};

// Update a blog
exports.updateBlog = async (req, res, next) => {
  try {

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(updatedBlog);
  } catch (error) {
    next(error);
  }
};

// Delete a blog
exports.deleteBlog = async (req, res, next) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!deletedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted successfully' });
  } 
  catch (error) {
    next(error);
  }
};
