import Problem from '../models/problemModel.js';

export const submit = async (req, res) => {
    const problemId = req.params.problemId;
    try {
        const problem = await Problem.findOne({_id : problemId});
        problem.discussions.push(req.body)
        problem.save(()=>{
            res.json(problem)
        })
    } catch (error) {
        res.status(500)
        res.json(req.body)
    }
}

export const getAll = async (req, res) => {
    const problemId = req.params.problemId;
    try {
        const problem = await Problem.findOne({_id : problemId});
        res.json(problem.discussions)
    } catch (error) {
        res.status(500)
        res.json({error : "problem not found"})
    }
}