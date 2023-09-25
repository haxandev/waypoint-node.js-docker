const app = require('./app');
const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || 'http://localhost';

app.listen(PORT, () => {
    console.log(`Server Listening at ${HOST}:${PORT}`);
});