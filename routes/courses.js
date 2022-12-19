const coursesController = require('../controllers/coursesController')

//methods
const post = 'POST'

//url's
const coursesURL = '/courses'


exports.requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    
    if (url === coursesURL && method === post) {
        coursesController.addMicroCourses(req, res)
    }
}
