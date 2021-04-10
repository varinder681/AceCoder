import axios from 'axios'

export const getOutput = async (source, lang='java') => {
    const program = {
        script : source,
        language: lang
    };

    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
// console.log(program);
    try {
        const {data} = await axios.post('/script', program, config);
        return data
    } catch (error) {
        console.log('error:', error);
        return error
    }
}

