const express = require("express");
const app = express();
const port = 3000;

// middleware
app.use(express.json());

const courses = [
    { id: 1, name: "courses1" },
    { id: 2, name: "courses2" },
    { id: 3, name: "courses3" }
];

// READ
app.get("/", (request, response) => {
    response.send("Hello Express")
});

// this gets all of the courses
app.get("/api/courses", (request, response) => {
    response.send(courses);
});

// this gets a single course
app.get("/api/courses/:id", (request, response) => {
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if (!course) response.status(404).send("The course with the given ID was not found.");
    response.send(course);
});

app.post("/api/courses", (request, response) => {
    const course = {
        id: courses.length + 1,
        name: request.body.name
    };
    // course.push(course);
    courses.push(course);
    response.send(course);
});

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});

