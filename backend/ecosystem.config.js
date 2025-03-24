module.exports = {
    apps: [
      {
        name: 'mern-backend',
        script: 'server.js',
        instances: 'max',
        env: {
          NODE_ENV: 'production',
          PORT: 5000,
          MONGO_URI: process.env.MONGO_URI,
          JWT_SECRET: process.env.JWT_SECRET,
        },
      },
    ],
  };
  