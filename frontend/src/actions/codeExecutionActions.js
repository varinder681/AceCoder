import axios from 'axios'

export const getOutput = async (source, lang='java',input,problem,isCreatingProblem) => {
    const program = {
        script : source,
        language: lang,
        stdin : input
    };

    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
// console.log(program);
    try {
        
        if(isCreatingProblem){
            const {data} = await axios.post(`/code/execute`,program,config);
            return data;
        }

        const {data} = await axios.post(`/code/execute/${problem._id}`, program, config);
        return data
    } catch (error) {
        console.log('error:', error);
        return error
    }
}

