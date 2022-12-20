const MicroCourses = require("./microCourse")

//value is a list with all subjects that requires the subject key
const subjects = new Map()

module.exports = class Course {
    
    constructor(userId, microCourses) {
        this.userId = userId
        this.microCourses = microCourses.map( subject => {
            return new MicroCourses(subject)
        })
    }

   getSubjectsInOrderToDo(subjects, dependencySubjectCounter) {
        let subjectsInOrder = []

        dependencySubjectCounter.forEach((value, key, map) => {
            let subjectBase = key
            let dependentSubjects = subjects.get(key)
            let hasAddBaseAndDependency = true

            if (subjectsInOrder.includes(subjectBase)) {
                subjectsInOrder = subjectsInOrder.concat(dependentSubjects)
            }  
            
            if (!subjectsInOrder.includes(subjectBase)) {
                
                //if dependent subject exists then add subjectBase before it.
                dependentSubjects.forEach((dependentSubject) => {
                    let index = subjectsInOrder.findIndex((element) => element == dependentSubject)
                    if (index >= 0) {
                        subjectsInOrder.splice(index, 0, subjectBase)
                        hasAddBaseAndDependency = false
                    }
                })
                
                if (hasAddBaseAndDependency) {
                    subjectsInOrder.push(subjectBase)
                    subjectsInOrder = subjectsInOrder.concat(dependentSubjects)
                }
            }
     
        })

        return subjectsInOrder
   }

}



