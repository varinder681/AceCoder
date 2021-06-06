import axios from 'axios'
import Problem from '../models/problemModel.js';

const execute = async (req, res) => {
    const {script, language,stdin} = req.body
    const problemId = req.params.problemId;

    const program = {
        "script" : script,
        "stdin" : stdin,
        "language" : language,
        "versionIndex": "0",
        "clientId": `${process.env.CLIENT_ID}`,
        "clientSecret":`${process.env.CLIENT_SECRET}`
    }
    try {
        const problem = await Problem.findOne({_id : problemId});

        const solution = problem.solution;
        
        for(let i=0; i<solution.length; i++){
            if(solution[i].language===language){
                program.script = program.script+solution[i].code;
                break;
            }
        }
        program.stdin = `1\n${program.stdin}`;
    } catch (error) {
        console.log("facing error");
        console.log(error);
    }
    const config = {
        headers: {
          "Content-Type": "application/json"
        },
      };

    try {
        // console.log(program);
        const {data} = await axios.post('https://api.jdoodle.com/v1/execute',program , config)
        res.json(data);
        // res.json({output : "Hold On for a sec"})
    } catch (error) {
        console.log('error :')
        console.log(error);
        res.send(error);
    }
}

export {execute}