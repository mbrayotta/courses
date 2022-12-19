const Course = require("../models/course");

exports.addMicroCourses = (req, res) => {
    let course

    req.on('data', body => {
        const bodyObj = JSON.parse(body);
        course = new Course(bodyObj.user_id, bodyObj.courses)
    })

    req.on('end', () => {
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(course.getSubjectsInOrderToDo()))
    })
}