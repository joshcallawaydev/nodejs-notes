const express = require('express');
const app = express();

const courses = [{
    id: 1,
    name: 'Course1'
}, {
    id: 2,
    name: 'Course2'
}, {
    id: 3,
    name: 'Course3'
}]

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('A course with the given ID was not found.'); // 404
    res.send(course);
});

// PORT enviroment variable *also export in terminal with 'export PORT=5000' or whatever port you choose

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));