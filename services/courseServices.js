
const mappingEquivalences = (microCourses) => {
    const subjectsEquivalences = new Map()

    microCourses.forEach( microCourse => {

        if (!subjectsEquivalences.has(microCourse.desiredCourse)) {
            subjectsEquivalences.set(microCourse.desiredCourse, [])
        }
        
        if (subjectsEquivalences.has(microCourse.requiredCourse)) {
            let subjectsWithDependency = subjectsEquivalences.get(microCourse.requiredCourse)
            subjectsWithDependency.push(microCourse.desiredCourse)
            subjectsEquivalences.set(microCourse.requiredCourse, subjectsWithDependency)
        }

        if (!subjectsEquivalences.has(microCourse.requiredCourse)) {
            subjectsEquivalences.set(microCourse.requiredCourse, [microCourse.desiredCourse])
        }
    })

    return subjectsEquivalences
}

const createSubjectsWithDependency = (subjects) => {
    let aux = new Map()
    subjects.forEach((value, key, map) => {
        aux.set(key, value.length)
    })
    
    return new Map([...aux].sort((a, b) => b[1] - a[1]))
}

module.exports = {
    mappingEquivalences,
    createSubjectsWithDependency
}