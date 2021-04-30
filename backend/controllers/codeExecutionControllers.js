import axios from 'axios'

const execute = async (req, res) => {
    const {script, language,stdin} = req.body
    
    const program = {
        "script" : script,
        "stdin" : stdin,
        "language" : language,
        "versionIndex": "0",
        "clientId": `${process.env.CLIENT_ID}`,
        "clientSecret":`${process.env.CLIENT_SECRET}`
    }
    const config = {
        headers: {
          "Content-Type": "application/json"
        },
      };

    try {
        const {data} = await axios.post('https://api.jdoodle.com/v1/execute',program , config)
        // console.log(program);
        res.json(data);
    } catch (error) {
        console.log('error :')
        console.log(error);
        res.send(error);
    }
}

export {execute}