import Problem from '../models/problemModel.js'

export const submit = async (req, res) => {
    const problem = JSON.parse(req.body.problem)
    const exists = await Problem.find({title : problem.title}).countDocuments()
    
    try {
        const pid = await Problem.countDocuments()
        if(exists > 0) {
        res.status(400)
            res.json({error : "problem already exists"})
        }
        else{
            try {
                const newProblem = await Problem.create({
                    pid : pid+1,
                    title : problem.title,
                    searchTitle : problem.searchTitle,
                    description : (problem.description),
                    editorial : (problem.editorial),
                    difficulty : problem.difficulty
                })
                if(newProblem){
                    res.status(200)
                    res.json({
                        _id : newProblem._id,
                        title : newProblem.title,
                        searchTitle : problem.searchTitle,
                        description : newProblem.description,
                        difficulty : newProblem.difficulty
                    })
                }                
            } catch (error) {
                res.status(500)
                res.json({error : error})
            }
        }
    } catch (error) {
        res.status(500)
        res.json({error : 'Internal Server Error jhkj'})
    }
}

export const getProblem = async (req,res) => {
    const {pid} = req.body
    const problem = await Problem.findOne({pid})

    res.json(problem)
}