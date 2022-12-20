const Course = require("../models/course");
const {mappingEquivalences, createSubjectsWithDependency} = require('../services/courseServices')

exports.addMicroCourses = (req, res) => {
    let course
    let subjects
    let dependencySubjectCounter

    req.on('data', body => {
        const bodyObj = JSON.parse(body);
        course = new Course(bodyObj.user_id, bodyObj.courses)
        subjects = mappingEquivalences(course.microCourses)
        dependencySubjectCounter = createSubjectsWithDependency(subjects)
    })

    req.on('end', () => {
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(course.getSubjectsInOrderToDo(subjects, dependencySubjectCounter)))
    })
}