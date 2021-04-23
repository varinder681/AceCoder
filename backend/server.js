import express from 'express';
import axios from 'axios'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/script', async (req, res) => {
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

    
})

const __dirname = path.resolve();

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })

} else {
    app.get('/',(req,res)=>{
        res.status(200).json({msg:"app is running at port 5000"});
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running at port 5000')
})